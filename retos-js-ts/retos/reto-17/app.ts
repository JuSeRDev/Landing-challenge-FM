
interface activity {
    title: string
    class: string
    timeframes:{
        daily:{
            current: number
            previous: number
        }
        weekly:{
            current: number
            previous: number
        }
        monthly:{
            current: number
            previous: number
        }
    }


const contInfoGrid = document.querySelector(".container-info-grid") as HTMLDivElement

const init = (
    data: activity[],
    dates: "daily" | "weekly" | "monthly", date: string,
    p1?:HTMLParagraphElement,
    p2?: HTMLParagraphElement,
    p3?: HTMLParagraphElement
    )=>{
        contInfoGrid.innerHTML = ""

        data.forEach(element =>{
            let title = element.title
            let classes = element.class
            let current = element.timeframes[dates].current.toString()
            let previous = element.timeframes[dates].previous.toString()

            contInfoGrid.innerHTML += `
        <div class="container-card-outside ${classes}">
            <div class="container-card-inside">
                <div class="header-card">
                <p class="title">${title}</p>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
                </div>
                <div class="timer">
                    <p class="hours">${current}hrs</p>
                    <p class="last">Last ${date} - ${previous}hrs</p>
                </div>
            </div>
        </div>
        `
        
    })
    if (p1 && p2 && p3) {
        updateStyle(p1,p2,p3)
    }
}

const updateStyle = (element1: HTMLParagraphElement, element2: HTMLParagraphElement, element3:HTMLParagraphElement) =>{
    element1.style.color = "white"
    element2.style.color = ""
    element3.style.color = ""
}

fetch("./data.json")
    .then(response => response.json())
    .then((data: activity[])=>{

        const days = document.querySelector(".daily") as HTMLParagraphElement
        const weeks = document.querySelector(".weekly") as HTMLParagraphElement
        const months = document.querySelector(".monthly") as HTMLParagraphElement
        
        init(data, "daily", "day", days, weeks, months)


        days.addEventListener("click", ()=>{
            init(data, "daily", "day", days, weeks, months)
        })

        weeks.addEventListener("click", ()=> {
            init(data, "weekly", "week", weeks, days, months)
        })
        months.addEventListener("click", ()=> {
            init(data, "monthly", "month", months, weeks, days) 
        })


        })

        .catch((error) => console.error("tenemos un error", error) )