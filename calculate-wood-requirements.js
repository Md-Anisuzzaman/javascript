function woodCalculator(chairQuantity, tableQuantity, bedQuantity)
{
 const perChairWood = 3;
 const perTableWood = 10;
 const perBedWood = 50;

  chairWoodQuantity =chairQuantity * perChairWood;
  tableWoodQuantity =tableQuantity * perTableWood;
  bedWoodQuantity =chairQuantity * perBedWood;

 const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
 return totalWood;

}

const firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);