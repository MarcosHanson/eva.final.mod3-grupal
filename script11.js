//Script permite dar formato a los graficos del plugin 

//grafico de barra
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['San Miguel', 'Puente Alto', 'Colina', 'Maipú', 'Machalí', 'San Bernado'],
        datasets: [{
            data: [9, 12, 3, 5, 2, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



//grafico de linea y punto
var ctx = document.getElementById('chart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', ' Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'],
        datasets: [{
            label: 'Accidentes',
            data: [9, 12, 3, 5, 2, 1,4,6,8,11,1,5],
            backgroundColor: 'rgba(240, 128, 128, 0.300)',
            borderColor: 'rgba(240, 128, 128)',
                borderWidth: 1
        },
            
        {
            label: 'Visitas',
            data:[4,1,6,4,10,7,1,3,5,7,8,12],
            backgroundColor: 'rgba(255, 255, 0, 0.300)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//grafico de torta
var ctx = document.getElementById('chart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',

    data: {
        labels: ['Cumplido','No Cumplido','Cumplido con observaciones'],
        datasets: [{
            data: [30,21,49],
            backgroundColor: [
            'rgba(240, 128, 128, 0.300)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(75, 192, 192, 0.2)'],
            borderWidth: 1,

            borderColor: [
            'rgba(240, 128, 128)',
            'rgba(54, 162, 235)',
            'rgba(75, 192, 192)'],
            borderWidth: 1
        
               
            
        
        }]
    },
    
});