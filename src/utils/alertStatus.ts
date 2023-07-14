interface AlertStatus {
  (status: number, description: { [key: number]: string }): void;
}

export const alertStatus: AlertStatus = (status, description) => {
  const _DESC = Object.entries(description);
  for (const [key, value] of _DESC) {
    if (status === parseInt(key)) window.alert(value);
  }
};
