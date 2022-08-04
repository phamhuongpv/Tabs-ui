var tabs = document.querySelectorAll('.tab-item');
var panes = document.querySelectorAll('.tab-pane');
var line = document.querySelector('.line')

tabs.forEach((tab, index) => {
    tab.onclick = function() {
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        
        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';
        panes[index].classList.add('active');
        this.classList.add('active');
    }
})