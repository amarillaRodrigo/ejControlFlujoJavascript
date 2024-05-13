let i = 0;

for(i = 0; i <= 10; i++){
    if( i === 0){
        console.log(i);
        console.log('Este numero no es par ni impar.');
    } else if (i % 2 === 0) {
        console.log(i);
        console.log('Este numero es PAR.');
    } else {
        console.log(i);
        console.log('Este numero es IMPAR.');
    };
};