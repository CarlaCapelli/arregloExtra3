function sumaArreglos() {
  let letra: string[] = new Array(3);
  let numero: number[] = new Array(3);
  let suma: any[] = new Array(3);
  for (let i: number = 0; i < 3; i++) {
    letra[i] = String(prompt("ingrese una letra"));
    numero[i] = Number(prompt("ingrese un numero"));
    suma[i] = letra[i] + numero[i];
  }
  let i = Number(prompt("ingrese la posicion que desea averiguar"));
  console.log(suma[i]);
}
sumaArreglos();
