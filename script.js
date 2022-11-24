const Bill_input = document.getElementById('billTotalInput');
const Tip_input = document.getElementById('tipInput');
const Total_people = document.getElementById('numberOfPeople');
const per_person_total = document.getElementById('perPersonTotal');

let number_of_people = Number(Total_people.innerText);


function Total_bill() {
  let bill = Number(Bill_input.value);
  let Tip_percentage = Number(Tip_input.value) / 100;
  let total_tip_amount = bill * Tip_percentage;
  let Total_bill = bill + total_tip_amount;

  let Per_person_total = Total_bill / number_of_people;

  per_person_total.innerText = `${Per_person_total.toFixed(2)}`;
}

function PersonIncrease() {
  number_of_people += 1;
  Total_people.innerText = number_of_people;
  Total_bill();
}

const Decress_people = () => {
  if (number_of_people <= 1) {
    return;
  }
  number_of_people -= 1;
  Total_people.innerText = number_of_people;
  Total_bill();
}