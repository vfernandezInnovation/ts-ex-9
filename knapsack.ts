type Item = {
  weight: number;
  value: number;
};

export function maximumValue({
  maximumWeight,
  items,
}: {
  maximumWeight: number;
  items: Item[];
}): number {
  let arrayTmp: Item[] = [];
  let arrayPosibilidades: Map<Item[], number> = new Map<Item[], number>();
  for (let i: number = 0; i < items.length; i++) {
    arrayTmp.push(items[i]);
    for (let j: number = 0; j < items.length; j++) {
      if (items[i] != items[j] && j != 0) arrayTmp.push(items[j]);
      let resultadoTmp: number = 0;

      for (let k = 0; k < arrayTmp.length; k++) {
        resultadoTmp += arrayTmp[k].value;
      }
      arrayPosibilidades.set(Array.from(arrayTmp), resultadoTmp);
    }
    arrayTmp = [];
  }
  // console.log(arrayPosibilidades);
  let bestValue: number = 0;

  for (var [key, value] of arrayPosibilidades) {
    let pesoTmp: number = 0;
    for (let h = 0; h < key.length; h++) {
      pesoTmp += key[h].weight;
    }
    if (pesoTmp <= maximumWeight) {
      if (bestValue < value) bestValue = value;
    }
  }
  let result: number;
  let tmp1: number;
  let tmp2: number;

  return bestValue;

  // return KS(items.length - 1, maximumWeight);

  // function KS(n: number, c: number): number {
  //   if (n == 0 || c == 0) {
  //     result = 0;
  //   } else if (items[n].weight > c) {
  //     result = KS(n - 1, c);
  //   } else {
  //     tmp1 = KS(n - 1, c);

  //     tmp2 = items[n].value + KS(n - 1, c - items[n].weight);

  //     result = Math.max(tmp1, tmp2);
  //   }

  //   return result;
  // }
}
