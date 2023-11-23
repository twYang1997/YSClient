import { Injectable } from "@angular/core";
import { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import Swal from "sweetalert2";

@Injectable()
export class SwalService {

  public successSwal() {
    Swal.fire({
      title: '儲存成功',
      icon: 'success',
    });
  }

  public failedSwal() {
    Swal.fire({
      title: "儲存失敗",
      icon: "error",
    });
  }

  public loadingSwal() {
    Swal.fire({
      title: "儲存中...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    })
  }

  public infoSwal(text: string) {
    Swal.fire({
      title: text,
      icon: "info",
    });
  }
}