export const APP_ROLE = {
  ADMIN: "Admin",
  SUPERVISOR: "Supervisor",
  LABOR: "Labor",
};

export const monthOptions = {
  0: "",
  1: "January",
  2: "February",
  3: "March",
  4: "Aprial",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

export const roleIdOptions = {
  1: "Admin",
  2: "Supervisor",
  3: "Labor",
};

export const roleIdOptionsArr = [
  { id: 1, label: "Admin" },
  { id: 2, label: "Supervisor" },
  { id: 3, label: "Labor" },
];

export const rateIdOptions = {
  1: "Skilled Labor",
  2: "Non Skilled Labor",
  3: "Officer",
};

export const rateIdOptionsForAdmin = {
  3: "Officer",
};

export const rateIdOptionsForLabor = {
  1: "Skilled Labor",
  2: "Non Skilled Labor",
};

export const adminRateIdOptions = [
  {
    id: 3,
    label: "Officer",
  },
];

export const supervisorRateIdOptions = [
  {
    id: 3,
    label: "Officer",
  },
];

export const labourateIdOptions = [
  { id: 1, label: "Skilled Labor" },
  { id: 2, label: "Non Skilled Labor" },
];

export const siteIdOptions = {
  1: "Colombo 2",
  2: "Dehevala",
};

export const pointOptions = {
  "-1": "-1",
  "-2": "-2",
  "-3": "-3",
  0: "0",
  1: "+1",
  2: "+2",
  3: "+3",
};


export const defaultConfig = {
  showConfirmButton: true,
  icon: "error",
  timer: 11500,
  customClass: {
    popup: "custom-modal-size",
    confirmButton: "custom-confirm-button",
  },
};
