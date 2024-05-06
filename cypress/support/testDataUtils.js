
export function generateFirstName() {
  const firstNameList = [
      "James",
      "John",
      "Robert",
      "Michael",
      "William",
      "David",
      "Richard",
      "Joseph",
      "Charles",
      "Thomas",
      "Christopher",
      "Daniel",
      "Matthew",
      "Anthony",
      "Donald",
      "Mark",
      "Paul",
      "Steven",
      "Andrew",
      "Kenneth",
  ];

  const randomIndex = Math.floor(Math.random() * firstNameList.length);
  return firstNameList[randomIndex];
}


export function generateCPF() {
  var n = 9;
  var n1 = Math.round(Math.random() * n);
  var n2 = Math.round(Math.random() * n);
  var n3 = Math.round(Math.random() * n);
  var n4 = Math.round(Math.random() * n);
  var n5 = Math.round(Math.random() * n);
  var n6 = Math.round(Math.random() * n);
  var n7 = Math.round(Math.random() * n);
  var n8 = Math.round(Math.random() * n);
  var n9 = Math.round(Math.random() * n);
  var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
  d1 = 11 - (d1 % 11);
  if (d1 >= 10) d1 = 0;
  var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
  d2 = 11 - (d2 % 11);
  if (d2 >= 10) d2 = 0;
  return '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
}


export function generateLastName() {
  const lastNameList = [
      "Smith",
      "Johnson",
      "Williams",
      "Brown",
      "Jones",
      "Miller",
      "Davis",
      "Garcia",
      "Rodriguez",
      "Martinez",
      "Hernandez",
      "Lopez",
      "Gonzalez",
      "Wilson",
      "Anderson",
      "Thomas",
      "Taylor",
      "Moore",
      "Jackson",
      "Martin",
  ];

  const randomIndex = Math.floor(Math.random() * lastNameList.length);
  return lastNameList[randomIndex];
}

export function generateDOB() {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - 32;

  // Mês e dia aleatórios para a data de nascimento
  const birthMonth = Cypress._.random(1, 12); // De 1 a 12
  const daysInMonth = new Date(birthYear, birthMonth, 0).getDate(); // Número de dias no mês
  const birthDay = Cypress._.random(1, daysInMonth); // De 1 ao número de dias no mês

  // Formatar a data de nascimento como "dd/mm/yyyy"
  const formattedDOB = `${String(birthDay).padStart(2, '0')}/${String(birthMonth).padStart(2, '0')}/${birthYear}`;

  return formattedDOB;
}

export function generateEmail() {
  const randomNumber = Math.floor(Math.random() * 10000); // Número aleatório entre 0 e 9999
  return `qaIsa${randomNumber}@example.com`;
}

export function generatePassword() {
  const length = 8;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
}

