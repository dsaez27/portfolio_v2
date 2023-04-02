type Color = string;

/**
 * @description
 * This function is used to lighten a color.
 * @param color
 * @param amount
 * @returns
 * @example
 * lighten("#000000", 10)
 */

export function lighten(color: Color, amount: number): Color {
    // Remove the '#' symbol from the color string
    const hex = color.replace("#", "");

    // Convert the hex string to a number
    const num = parseInt(hex, 16);

    // Calculate the new color value by adding the amount to each RGB channel
    const r = Math.min(255, Math.round(((num >> 16) & 255) + amount));
    const g = Math.min(255, Math.round(((num >> 8) & 255) + amount));
    const b = Math.min(255, Math.round((num & 255) + amount));

    // Convert the RGB values back to a hex string and prepend the '#' symbol
    const newHex = `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;

    return newHex;
}

/**
 * @description
 * This function is used to lighten a color.
 * @param color
 * @param amount
 * @returns
 * @example
 * darken("#ffffff", 10)
 */

export function darken(color: Color, amount: number): Color {
    // Remove the '#' symbol from the color string
    const hex = color.replace("#", "");

    // Convert the hex string to a number
    const num = parseInt(hex, 16);

    // Calculate the new color value by subtracting the amount from each RGB channel
    const r = Math.max(0, Math.round(((num >> 16) & 255) - amount));
    const g = Math.max(0, Math.round(((num >> 8) & 255) - amount));
    const b = Math.max(0, Math.round((num & 255) - amount));

    // Convert the RGB values back to a hex string and prepend the '#' symbol
    const newHex = `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;

    return newHex;
}
