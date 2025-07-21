
type MyProps = {
    img: string;
    heading: string;
    title: string;
    text: string;
    bgColor: string;
    //style={{ backgroundColor: bgColor }}
}

export default function Content(props: MyProps) {
    return (
        <>
            <div className="flex gap-6 p-12 bg-[var(--bgColor)]" style={{ "--bgColor": props.bgColor } as React.CSSProperties}>
                <img src={props.img} className="w-70" alt="WorkingMan" />
                <div className="flex flex-col text-[20px] text-right justify-center">
                    <p>{props.heading}</p>
                    <p className="text-[var(--primaryGreen)] text-2xl">{props.title}</p>
                    <p>{props.text}</p>
                </div>
            </div>

        </>
    )
}