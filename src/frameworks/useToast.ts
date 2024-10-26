import { ToastType } from "@/lib/constants/enums";
import {toast as Toast} from "react-hot-toast";

export default function useToast() {
  function toast(message: string, {type}:{type:ToastType}) {
    if (type === ToastType.Success) {
      Toast.success(message);
    } else if (type === ToastType.Failure){
      Toast.error(message);
    }
  }

  return { toast };
}
