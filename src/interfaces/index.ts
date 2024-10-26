import { ResponseState } from "@/lib/constants/enums";

export interface BaseResponse {
  state: ResponseState;
  status: number;
  message: string;
}
