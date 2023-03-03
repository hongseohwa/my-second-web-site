function modeChange(self) {
    var target = document.querySelector('body');
    var alist = document.querySelectorAll('a');
    var i = 0;
    if(self.value === 'light') {
        document.querySelector('body').style.backgroundColor = '#000';
        document.querySelector('body').style.color = '#FFF';
        while (i < alist.length) {
            alist[i].style.color = '#FFF';
            i += 1;
        }
        self.value = 'dark';
    } else {
        document.querySelector('body').style.backgroundColor = '#FFF';
        document.querySelector('body').style.color = '#000';
        while (i < alist.length) {
            alist[i].style.color = '#000';
            i += 1;
        }
        self.value = 'light';
    }
}