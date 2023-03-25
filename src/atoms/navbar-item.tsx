import Link from "next/link";

export default function NavBarItem(props: { href: string, text: string, active: boolean }) {
    return (
        <Link className="font-semibold text-oxfordblue p-2 hover:underline" href={props.href}>{props.text}</Link>
    )
}
