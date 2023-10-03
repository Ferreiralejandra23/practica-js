numAnterior=5;
numActual=numAnterior+1;
test('JuegoActual', () => {
    expect(numActual).toBeGreaterThanOrEqual(1);
    expect(numActual).toBeLessThanOrEqual(10);
    expect(numActual).toEqual(numAnterior+1);
});