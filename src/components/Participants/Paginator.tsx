import st from "./Participant.module.css";
import React, {useState} from "react";

type PaginatorType = {
    activePage: number
    showPaticipants: (activePage: number) => void
    totalCount: number
    count: number
}


export const Paginator = (props: PaginatorType) => {

    let pageCountNumber = Math.ceil(props.totalCount / props.count)
    /* количество страниц с сервера ожидаю*/
    let pageCount = []
    for (let i = 1; i <= pageCountNumber; i++) {
        pageCount.push(i)
    }

    const setActivePageHandler = (activePage: number) => {
        props.showPaticipants(activePage)
    }


    const sizeOnePortion = 15
    const allPorions = Math.ceil(pageCountNumber / sizeOnePortion)
    const [portion, setPortion] = useState(1)
    const numberStartPortion = (portion - 1) * sizeOnePortion + 1
    const numberFinishPortion = portion * sizeOnePortion

    const setPortionMinusOne = () => {
        setPortion(portion - 1)
        setActivePageHandler((portion-1 )*sizeOnePortion)
    }

    const setPortionPlusOne = () => {
        setPortion(portion + 1)
        setActivePageHandler((portion )*sizeOnePortion+1)
    }

    return (
        <div>
            {portion > 1 && <button onClick={setPortionMinusOne}>behind</button>}
            {
                pageCount
                    .filter(p => p >= numberStartPortion && p <= numberFinishPortion)
                    .map(e => {
                        return (
                            <span>
                                <button
                                    onClick={() => {
                                        setActivePageHandler(e)
                                    }}
                                    className={
                                        props.activePage === e ? st.paginationButton : ''}
                                >{e}</button>
                            </span>
                        )
                    })
            }
            <button onClick={setPortionPlusOne}>next</button>
        </div>
    )
}