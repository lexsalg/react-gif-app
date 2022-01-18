import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [state, setState] = useState({ x: 0, y: 0 })
    const { x, y } = state;




    useEffect(() => {

        const mouseMove = (e) => {
            const coordenadas = { x: e.x, y: e.y };
            setState(coordenadas);
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log('componente desmontado');
        }
    }, [])

    return (
        <div>
            <h3>Hola mensaje did mount</h3>
            <p>x:{x},y:{y} </p>
        </div>
    )
}
