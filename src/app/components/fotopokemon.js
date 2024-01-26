"use client"
import React,{useState, useEffect} from "react";
import Image from "next/image";
import style from "./fotopokemon.module.css";
function FotoPokemon(){
    const [pokemon, setPokemon] = useState("/vercel.svg");
    const [nombre, setNombre] = useState("esperando");
    const [id, setId] = useState("esperando");
    const [tipo, setTipo] = useState("esperando");
    const [altura, setAltura] = useState("esperando");
    const [peso, setPeso] = useState("esperando");
    const [habilidades1, setHabilidades1] = useState("esperando");
    const [habilidades2, setHabilidades2] = useState("esperando");
    const [hp, setHp] = useState("esperando");
    const [attack, setAttack] = useState("esperando");
    const [defense, setDefense] = useState("esperando");
    const [speed, setSpeed] = useState("esperando");

    const url="https://pokeapi.co/api/v2/pokemon/70";
    useEffect(()=>{
        fetch(url)//haz el get
        .then(res=>res.json())//recupera 
        .then(data=>{setPokemon(data.sprites.front_default)
        ,setNombre(data.species.name)
        ,setId(data.id)
        ,setTipo(data.types[0].type.name)
        ,setAltura(data.height)
        ,setPeso(data.weight)
        ,setHabilidades1(data.abilities[0].ability.name)
        ,setHabilidades2(data.abilities[1].ability.name)
        ,setHp(data.stats[0].base_stat)
        ,setAttack(data.stats[1].base_stat)
        ,setDefense(data.stats[2].base_stat)
        ,setSpeed(data.stats[5].base_stat)
        
        })
    },[]);
    return(
        <div className={style.contenedor}>
            <div className={style.contenedorimg}>
                <h1 className={style.title1}>My Pokemon</h1>
                <h1 className={style.title2}>{nombre}</h1>
                <p className={style.id}>#0{id}</p>
                <Image src={pokemon} alt="pokemon" height={300} width={300}/>
            </div>
            <div className={style.granContenedor}>
                <div className={style.about}>
                    <h1 className={style.title3}>About</h1>
                    <div className={style.info}>
                    <p className={style.info2}>Type</p>
                    <p>{tipo}</p>
                    <p className={style.info2}>Height</p>
                    <p className={style.especial}>{altura/10} m</p>
                    <p className={style.info2}>Weight</p>
                    <p>{peso/10} kg</p>
                    <p className={style.info2}>Abilities</p>
                    <p>{habilidades1}, {habilidades2}</p>
                    </div>
                </div>
                <div className={style.stats}>
                    <h1 className={style.title4}>Stats</h1>
                    <div className={style.info}>
                        <p className={style.info2}>HP</p>
                        <p>{hp}</p>
                        <p className={style.info2}>Attack</p>
                        <p>{attack}</p>
                        <p className={style.info2}>Defense</p>
                        <p>{defense}</p>
                        <p className={style.info2}>Speed</p>
                        <p>{speed}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default FotoPokemon;