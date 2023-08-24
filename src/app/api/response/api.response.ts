// interfaces/API/ApiResponse.ts

export interface ApiResponse<T = any> {
    success: boolean;
    data: T;
    message: string;
  }
  