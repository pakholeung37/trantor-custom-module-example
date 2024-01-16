import { devtools } from '@terminus/t-package-plugin/lib/devtools';

devtools({
  deffered: async () => {
    await import("./runtime");
  },
});
