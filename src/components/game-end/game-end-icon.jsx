export const GameEndIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} >
        <defs>
        <style>
            {
            ".game-end__icon{fill:none;stroke:#999;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
            }
        </style>
        </defs>
        <g transform="translate(-1 -1)">
        <circle
            className="game-end__icon"
            cx={15}
            cy={15}
            r={15}
            transform="translate(2 2)"
        />
        <path className="game-end__icon" d="M17 8v9l6 3" />
        </g>
    </svg>
)