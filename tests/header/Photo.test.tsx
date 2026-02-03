import {render, screen} from '@testing-library/react';
import Photo from "../../app/components/header/Photo"
import { StaticImageData } from "next/image";
import userEvent from '@testing-library/user-event';

describe("Photo Component", () => {

    const mockImage = {
        src: "/app/images/foto.png",
        height: 447,
        width: 350,
        blurDataURL: "",
        placeholder: "blur",
    } as unknown as StaticImageData;

    it("should render the Photo component", () => {
        render(<Photo image={mockImage} />);

        const imgElement = screen.getByAltText("Foto de perfil de Miguel Gonçalves");
        expect(imgElement).toBeInTheDocument();
    });

    it("should flip the photo on hover", async () => {
        const user = userEvent.setup();
        render(<Photo image={mockImage} />);

        const container = screen.getByRole("img").parentElement?.parentElement?.parentElement;

        if (container) {
            await user.hover(container);
            await new Promise(resolve => setTimeout(resolve, 50));

            await user.unhover(container);
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    });

    it("should render with correct dimensions", () => {
        render(<Photo image={mockImage} />);
        const container = screen.getByRole("img").parentElement?.parentElement;
        
        expect(container).toHaveStyle({ height: "520"});
    });
});