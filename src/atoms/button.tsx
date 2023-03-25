export default function Button(props: { text: string }) {
    return (
        <button type="button" className="px-5 py-2 rounded-full
                                        font-semibold text-white
                                        bg-seagreen hover:bg-seagreen-xdark transition duration-500">{props.text}</button>
    )
}
