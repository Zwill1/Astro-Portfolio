function Hamburger() {
  return (
    <>
        {/* // Making a hamburger menu with CSS ONLY */}
        <section className="hover:cursor-pointer">
            <div style="width: 35px; height: 3px; background-color: black; margin: 6px 0;"></div>
            <div style="width: 35px; height: 3px; background-color: black; margin: 6px 0;"></div>
            <div style="width: 35px; height: 3px; background-color: black; margin: 6px 0;"></div>
        </section>
    </>
  )
}

export default Hamburger