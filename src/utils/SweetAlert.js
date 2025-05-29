import Swal from "sweetalert2";

export const showAlert = ({
  title = "Notification",
  text = "",
  icon = "info",
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
    ...rest,
  });
};
