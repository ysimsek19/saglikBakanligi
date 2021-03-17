var myChart = echarts.init(document.getElementById('artis'));
var data1=[110.17, 92.45, 85.14, 66.68, 65.57, 56.13, 52.93, 52.60, 45.23, 42.47]
var data2=[49.78 , 31.65, 20.27, 20.03, 18.72, 14.12, 13.11, 13.07, 9.97, 8.26]
var up = 'path://M286.031,265l-16.025,3L300,223l29.994,45-16.041-3-13.961,69Z';
var down = 'path://M216.969,292l16.025-3L203,334l-29.994-45,16.041,3,13.961-69Z'
//遍历data2里面元素的正负定义一个矢量路径的数组
var path = [up,up,up,up,up,up,up,up,up,up,]
var path2 = [down,down,down,down,down,down,down,down,down,down,]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        
        data: ['Yüz binde Vaka Sayısı(27 Şubat-5Mart)',  'Artis']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
       nameGap: 300,
      inverse: false,     //grafiği ters çevirme işlemi
      boundaryGap: true,
      splitNumber: 20,
      
      
        
    },
    xAxis: {
        type: 'category',
        data: ['SAMSUN', 'KİLİS', 'BALIKESİR', 'İSTANBUL', 'YALOVA', 'IĞDIR', 'KONYA' , 'KASTAMONU', 'KAYSERİ', 'ÇANAKKALE']
    },
    series: [
        {
            "name": "",
            type: 'pictorialBar',
            symbol: function(data,params){
                return path[params.dataIndex]
            },
            symbolSize: [20, 30],
            symbolOffset: ['100%', -250],
            color:'orange',
            symbolPosition: 'end',
            label: {
                
                formatter:  function(params){
                    return data1[params.dataIndex]
                },
                fontSize: 30,
                fontWeight: 'bold',
                color: '#34DCFF'
            },
            data: data1
        },
        {
            name: 'Yüz binde Vaka Sayısı(27 Şubat-5Mart)',
            type: 'bar',
            color:'blue',
            stack: 'total',
            
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [348.36, 163.17, 172.46, 111.57, 134.76, 24.84, 150.98, 65.63, 97.72, 107.29]
        },

        {
            name: 'Artis',
            type: 'bar',
            color:'red',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: data1
        }
    ]
};
myChart.setOption(option);



var myChart = echarts.init(document.getElementById('azalis'));

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        data: ['Yüz binde Vaka Sayısı(27 Şubat-5Mart)',  'Azalis']
       
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        splitNumber: 20,
    },
    xAxis: {
        type: 'category',
        data: ['SAKARYA', 'ORDU', 'AMASYA', 'RİZE', 'BURDUR', 'GÜMÜŞHANE', 'BİTLİS' , 'BARTIN', 'SİİRT', 'ARTVİN']
    },
    series: [{
        "name": "",
        type: 'pictorialBar',
        symbol: function(data,params){
            return path2[params.dataIndex]
        },
        symbolSize: [15, 30],
       // symbolOffset: ['100%', -290],
        color:'orange',
        symbolPosition: 'end',
        label: {
           
            formatter:  function(params){
                return data2[params.dataIndex]
            },
            fontSize: 30,
            fontWeight: 'bold',
            color: '#34DCFF',
            
        },
        data: data2
    },
        {
            name: 'Yüz binde Vaka Sayısı(27 Şubat-5Mart)',
            type: 'bar',
            color:'blue',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
               
            },
            data: [90.15, 248.62, 163.64, 188.18, 86.49, 137.61, 15.95, 62.82, 2.11, 100.88]
        },
     
        {
            name: 'Azalis',
            type: 'bar',
            color:'green',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                
            },
            data: data2
        }
    ]
};
myChart.setOption(option);