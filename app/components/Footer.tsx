export default function Footer() {
    const today = new Date();

    return (
        <footer className="bg-black text-center p-5 ">
            <p>© {today.getFullYear()} Site made by Miguel Gonçalves.</p>
        </footer>
    );
}