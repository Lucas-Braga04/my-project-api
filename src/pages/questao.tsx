import { useEffect, useState } from "react";

interface Questao{
    id: string;
    enunciado: string;
    resposta: string[];
}

const LoadingSpinner: any = () => {
    return <div>Carregando...</div>
}

export default function Questao(){
    const [questao, setQuestao] = useState<Questao | null>(null);

    useEffect(() => {
        fetch('http://localhost:4077/api/questao/1020')
        .then(resp => resp.json())
        .then(setQuestao)
    }, [])

    if(!questao){
        return <LoadingSpinner/>;
    }

    return(
        <div>
            <h1>Questão</h1>
            <div>
                <span>{questao?.enunciado}</span>
            </div>
        </div>
    )

}