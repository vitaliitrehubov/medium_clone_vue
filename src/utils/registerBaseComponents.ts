import { camelCase, upperFirst } from '@/utils/stringHelpers'

export const registerBaseComponents = (vm) => {
  try {
    const requireComponent = require.context(
      '../components/base',
      true,
      /Base[\w-]+\.vue$/
    );

    requireComponent.keys().forEach((filePath) => {
      // Get component config
      const componentConfig = requireComponent(filePath);
      // Get filename from the filePath
      const fileName = filePath.split('/').slice(-1)[0];
      // Remove file extension and convert component name to pascal case
      const componentName = upperFirst(
        camelCase(fileName.replace(/\.\w+$/, ''))
      );
      // Register component globally
      vm.component(componentName, componentConfig.default || componentConfig);
    });
  } catch (err) {
    console.error(err);
  }
}