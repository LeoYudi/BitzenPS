class CustomError extends Error {
  apiErrors?: any;
  type: string;
  status?: number;

  constructor(message: string, type: string, status?: number, apiErrors?: any) {
    super(message)
    this.type = type;
    this.apiErrors = apiErrors;
    this.status = status;
  }
}

export { CustomError }