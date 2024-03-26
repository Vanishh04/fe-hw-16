document.getElementById("sumPositiveBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let sum = 0;
    let count = 0;
  
    array.forEach((element) => {
      if (element > 0) {
        sum += element;
        count++;
      }
    });
  
    displayOutput(`Сума позитивних елементів: ${sum}, Кількість позитивних елементів: ${count}`);
  });
  
  document.getElementById("minMaxBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    const min = Math.min(...array);
    const max = Math.max(...array);
    const minIndex = array.indexOf(min) + 1;
    const maxIndex = array.indexOf(max) + 1;
  
    displayOutput(`Мінімальний елемент: ${min} (порядковий номер: ${minIndex}), Максимальний елемент: ${max} (порядковий номер: ${maxIndex})`);
  });
  
  document.getElementById("countNegativesBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let count = 0;
  
    array.forEach((element) => {
      if (element < 0) {
        count++;
      }
    });
  
    displayOutput(`Кількість негативних елементів: ${count}`);
  });
  
  document.getElementById("countOddPositivesBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let count = 0;
  
    array.forEach((element) => {
      if (element > 0 && element % 2 !== 0) {
        count++;
      }
    });
  
    displayOutput(`Кількість непарних позитивних елементів: ${count}`);
  });
  
  document.getElementById("countEvenPositivesBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let count = 0;
  
    array.forEach((element) => {
      if (element > 0 && element % 2 === 0) {
        count++;
      }
    });
  
    displayOutput(`Кількість парних позитивних елементів: ${count}`);
  });
  
  document.getElementById("sumEvenPositivesBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let sum = 0;
  
    array.forEach((element) => {
      if (element > 0 && element % 2 === 0) {
        sum += element;
      }
    });
  
    displayOutput(`Сума парних позитивних елементів: ${sum}`);
  });
  
  document.getElementById("sumOddPositivesBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let sum = 0;
  
    array.forEach((element) => {
      if (element > 0 && element % 2 !== 0) {
        sum += element;
      }
    });
  
    displayOutput(`Сума непарних позитивних елементів: ${sum}`);
  });
  
  document.getElementById("productOfPositivesBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    let product = 1;
  
    array.forEach((element) => {
      if (element > 0) {
        product *= element;
      }
    });
  
    displayOutput(`Добуток позитивних елементів: ${product}`);
  });
  
  document.getElementById("resetBtn").addEventListener("click", () => {
    const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
  
    array.forEach((element, index) => {
      if (element !== 0) {
        array[index] = 0;
      }
    });
  });
  
  const displayOutput = (message) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${message}</p>`;
  };
  