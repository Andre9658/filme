export default function CustomSelect({label,options,onChange,value}){
    return(
        <div className="w-full flex flex-col gap-2">
            <label className="text-[17px] font-bold">{label}</label>
            <select
            value={value}
            onChange={onChange}
            className="w-full h-[45px] rounded-lg border bg-[#141414] border-[#ffffff1a] outline-none focus:border-purple-400 px-2">
                <option value="value">Select...</option>
                {options.map((opcao) => {
                    return(
                        <option className=""
                        key={opcao} 
                        value={opcao}
                        >{opcao}</option>
                    )
                })}
            </select>
        </div>
    )
}