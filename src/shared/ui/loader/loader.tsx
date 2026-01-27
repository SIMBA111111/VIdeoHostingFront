import './styles.module.scss'

export const Loader = ({ size = 40 }: { size?: number }) => {
    return (
        <div className="loader-container">
            <div 
                className="loader"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderWidth: `${size}px`
                }}
            ></div>
        </div>
    );
};