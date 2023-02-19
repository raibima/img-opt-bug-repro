import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "img-opt-bug-repro",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(function Site(ctx) {
      const site = new NextjsSite(ctx.stack, "img-opt-bug-repro-site", {
        path: ".",
      });
      ctx.stack.addOutputs({
        SiteUrl: site.url || "http://localhost:3000",
      });
    });
  },
} satisfies SSTConfig;
