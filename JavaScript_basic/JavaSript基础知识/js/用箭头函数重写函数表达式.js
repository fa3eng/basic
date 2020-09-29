function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "do you know",
    () => alert('aaa'),
    () => alert('ssa')
);