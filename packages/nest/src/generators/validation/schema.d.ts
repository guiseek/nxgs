export interface ValidationOptions {
  directory?: string;
  auto?: boolean;
  project?: string;
}

export interface NormalizedValidationOptions extends ValidationOptions {
  auto: boolean;
}
