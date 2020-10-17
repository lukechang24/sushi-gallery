import React from "react"
import S from "../Sushi/style"

const Others = (props) => {
    const sides = props.sides ? props.sides.elements : []
    const sidesList = sides.map((side, i) => {
        const newName = side.name.split("").map((letter, i, arr) => arr.indexOf("(") < i && arr.indexOf("(") >= 0 ? letter : letter.toUpperCase()).join("")
        return(
            <S.Item key={i}>
                <S.Name>{side.name}</S.Name>
                <S.Price>${side.price}</S.Price>
            </S.Item>
        )
    })
    return(
        <S.Container1>
            <S.Container2>
                <S.List>
                    <S.SubCatergory>Sides</S.SubCatergory>
                    {sidesList}
                </S.List>
            </S.Container2>
        </S.Container1>
    )
}

export default Others