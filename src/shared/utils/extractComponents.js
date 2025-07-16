import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseAllComponents(fileContent) {
  const components = {};
  const patterns = [
    /function\s+([A-Z][A-Za-z0-9_]*)\s*\([^)]*\)\s*{([\s\S]*?)^}/gm,
    /const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*(?:\([^)]*\)|\(\))\s*=>\s*{([\s\S]*?)^}/gm,
  ];

  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(fileContent)) !== null) {
      const componentName = match[1];
      if (!components[componentName]) {
        components[componentName] = {
          code: match[0].trim(),
          dependencies: findJSXComponents(match[0]),
        };
      }
    }
  });

  return components;
}
function findJSXComponents(componentCode) {
  const jsxComponents = new Set();
  const jsxRegex = /<([A-Z][A-Za-z0-9_]*)(?:\s|>)/g;
  let match;

  while ((match = jsxRegex.exec(componentCode)) !== null) {
    const componentName = match[1];
    if (!builtInComponents.has(componentName)) {
      jsxComponents.add(componentName);
    }
  }

  return Array.from(jsxComponents);
}

function findAllDependencies(components, startComponent) {
  const dependencies = new Set();
  const queue = [startComponent];

  while (queue.length > 0) {
    const current = queue.pop();
    if (components[current] && !dependencies.has(current)) {
      dependencies.add(current);
      components[current].dependencies.forEach((dep) => {
        if (!dependencies.has(dep)) {
          queue.push(dep);
        }
      });
    }
  }

  return dependencies;
}

const builtInComponents = new Set([
  "Fragment",
  "div",
  "span",
  "button",
  "input",
  "img",
  "a",
  "p",
  "ul",
  "li",
  "ol",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
]);

function createComponentFiles(allComponents) {
  const componentStructure = {
    Tabbar: [
      "Tabbar",
      "TabbarItem",
      "TabbarItem1",
      "TabbarItem2",
      "TabbarItem3",
      "TabbarItem4",
    ],
    NavigationBar: ["NavigationBar", "StatusBar", "TopTitle", "Button5"],
    Content: [
      "Content8",
      "Suggest",
      "Cards2",
      "Cards1",
      "Account2",
      "SmallBanners",
      "Finance",
      "BannerRow",
      "Container22",
      "BannerRow1",
      "Features3",
      "Tabs",
      "Account",
      "Account1",
      "Container10",
    ],
    Shared: ["Overlay", "Home"],
  };
  Object.keys(componentStructure).forEach((folder) => {
    const folderPath = path.join(__dirname, "src", "components", folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
  });

  const allDependencies = new Set();
  Object.keys(allComponents).forEach((comp) => {
    findAllDependencies(allComponents, comp).forEach((dep) =>
      allDependencies.add(dep)
    );
  });

  allDependencies.forEach((componentName) => {
    const folder = findComponentFolder(componentName, componentStructure);
    if (folder) {
      const filePath = path.join(
        __dirname,
        "src",
        "components",
        folder,
        `${componentName}.tsx`
      );

      if (allComponents[componentName]) {
        const component = allComponents[componentName];
        let imports = "import React from 'react';\n";

        component.dependencies.forEach((dep) => {
          const depFolder = findComponentFolder(dep, componentStructure);
          if (depFolder) {
            imports += `import ${dep} from '../${depFolder}/${dep}';\n`;
          }
        });

        const fileContent = `${imports}\n${component.code}\n\nexport default ${componentName};\n`;
        fs.writeFileSync(filePath, fileContent);
        console.log(`✅ Created: ${filePath}`);
      } else {
        const fileContent = `import React from 'react';\n\nfunction ${componentName}() {\n  return <div>${componentName} placeholder</div>;\n}\n\nexport default ${componentName};\n`;
        fs.writeFileSync(filePath, fileContent);
        console.log(`⚠️  Created placeholder: ${filePath}`);
      }
    }
  });
}

function findComponentFolder(componentName, structure) {
  for (const [folder, components] of Object.entries(structure)) {
    if (components.includes(componentName)) {
      return folder;
    }
  }
  return "Content";
}

function main() {
  try {
    const inputFilePath = process.argv[2] || "source.tsx";
    const fileContent = fs.readFileSync(inputFilePath, "utf-8");

    const allComponents = parseAllComponents(fileContent);
    console.log("🔍 Found components:", Object.keys(allComponents));

    createComponentFiles(allComponents);

    console.log("✅ Extraction completed!");
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

main();
