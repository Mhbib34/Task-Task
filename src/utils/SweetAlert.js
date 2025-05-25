import Swal from "sweetalert2";

export const showAlert = ({
  title = "Notification",
  text = "",
  icon = "info", // success, error, warning, question
  confirmButtonText = "OK",
  showCancelButton = false,
  cancelButtonText = "Cancel",
  timer = null,
  position = "center",
  ...rest
} = {}) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    timer,
    position,
    ...rest, // bisa tambahkan option lain seperti html, input, dll
  });
};
