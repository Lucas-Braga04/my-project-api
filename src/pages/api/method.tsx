import {NextRequest, NextResponse} from "next/server";

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextRequest, res: NextResponse) => {
    if (req.method !== "GET" && req.method !== "POST") {
        (res as any).status(405).send("A sua requisição não pode ser atendida"); // Retorna a existencia da página, mas o método de acesso não é permitido.
    }else{
        (res as any).status(200).json({Bem_vindo: "Seja bem-vindo a API"});
    }
    (res as any).status(200).json({ metodo: req.method});

};