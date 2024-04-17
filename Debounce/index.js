React.useEffect(() => {
  const timer = setTimeout(() => {
    console.log("helllo", value);
  }, 1000);

  return () => clearTimeout(timer)
}, [value]);
