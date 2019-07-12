
    var atab = document.getElementById('tab');  //最外层包裹的
    var bli = atab.getElementsByTagName('li');    
    var cdiv = atab.getElementsByTagName('div')[0];  //[0]用array的第一个
    var array = [                                    //建一个array，把节日活动存进去，用array.index展示
        'Happy New year!',
        'Happy Valentine’s Day!',
        'St Patrick’s Day',
        'Happy Easter!',
        'Labour’s Day', 
        'Hey Winter~',
        'Happy Every Day',
        'Back To School',
        'Early Summer',
        'Halloween!',
        'Thanks Giving~',
        'Merry Christmax!'
    ];
    
    for (var i = 0; i < bli.length; i ++) {
        bli[i].index = i; 
        bli[i].onmouseover = function () {
            for (var i = 0; i < bli.length; i ++) {
                bli[i].className='';
            }
            this.className='active';
            cdiv.innerHTML='<h2>'+ 'Event in' + ' ' + (this.index + 1) + '</h2>' + '<p>' + array[this.index] + '</p>';
        };
    }
