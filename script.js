const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const activeTab = $('.tab-item.active')
const line = $('.tabs .line')

line.style.left = activeTab.offsetLeft + 'px'
line.style.width = activeTab.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
        panes[index].classList.add('active')

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        console.log([$('.tab-item.active')])
    }
})

