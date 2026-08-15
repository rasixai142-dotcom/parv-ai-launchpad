import { createServerFn } from "@tanstack/react-start";

import { appendRegistration, registrationSchema } from "./registrations.server";

export const saveRegistration = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => registrationSchema.parse(data))
  .handler(async ({ data }) => appendRegistration(data));
