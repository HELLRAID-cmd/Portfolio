type HeaderStarProps = {
  className: string
}

export const HeaderStar = ({className}: HeaderStarProps) => {  
  return (
    <>
    {Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={className}
        width="6"
        height="6"
        aria-hidden="true"
      >
        <use href="/svg/sprite.svg#icon-theme-star"></use>
      </svg>
    ))}
    </>
  )
};
