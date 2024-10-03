let x = 0
let y = 0
let z = 0
let material = 0
let numero_de_cuadros = 0
let lado = 0
player.onChat("1", function () {
    blocks.fill(
    BLACK_WOOL,
    world(-8, 0, -8),
    world(8, 0, 8),
    FillOperation.Outline
    )
    blocks.fill(
    AIR,
    world(-7, 0, -7),
    world(7, 0, 7),
    FillOperation.Outline
    )
    blocks.fill(
    BLACK_WOOL,
    world(-6, 0, -6),
    world(6, 0, 6),
    FillOperation.Outline
    )
    blocks.fill(
    AIR,
    world(-5, 0, -5),
    world(5, 0, 5),
    FillOperation.Outline
    )
    blocks.fill(
    BLACK_WOOL,
    world(-4, 0, -4),
    world(4, 0, 4),
    FillOperation.Outline
    )
    blocks.fill(
    AIR,
    world(-3, 0, -3),
    world(3, 0, 3),
    FillOperation.Outline
    )
    blocks.fill(
    BLACK_WOOL,
    world(-2, 0, -2),
    world(2, 0, 2),
    FillOperation.Outline
    )
    blocks.fill(
    AIR,
    world(-1, 0, -1),
    world(1, 0, 1),
    FillOperation.Outline
    )
    blocks.place(GOLD_BLOCK, world(0, 0, 0))
    blocks.place(GOLD_BLOCK, world(0, 1, 0))
    blocks.place(BEACON, world(0, 2, 0))
    blocks.place(PURPLE_STAINED_GLASS, world(0, 3, 0))
})
player.onChat("2", function () {
    x = x + 15
    y = y + 0
    z = z + 15
    material = PLANKS_ACACIA
    numero_de_cuadros = 20
    lado = numero_de_cuadros * 2
    for (let índice = 0; índice <= numero_de_cuadros; índice++) {
        blocks.fill(
        material,
        world(x - lado, y, z - lado),
        world(x + lado, y, z + lado),
        FillOperation.Outline
        )
        blocks.fill(
        AIR,
        world(x - (lado - 1), y, z - (lado - 1)),
        world(x + (lado - 1), y, z + (lado - 1)),
        FillOperation.Outline
        )
        lado += -2
    }
    blocks.fill(
    AIR,
    world(100, 0, 98),
    world(100, 5, 98),
    FillOperation.Replace
    )
})
player.onChat("3", function () {
    x = player.position().getValue(Axis.X)
    y = player.position().getValue(Axis.Y)
    z = player.position().getValue(Axis.Z)
    material = MAGENTA_WOOL
    numero_de_cuadros = 4
    lado = numero_de_cuadros * 2
    for (let índice = 0; índice <= numero_de_cuadros; índice++) {
        blocks.fill(
        material,
        world(x - lado, y, z - lado),
        world(x + lado, y, z + lado),
        FillOperation.Outline
        )
        blocks.fill(
        AIR,
        world(x - (lado - 1), y, z - (lado - 1)),
        world(x + (lado - 1), y, z + (lado - 1)),
        FillOperation.Replace
        )
        lado += -2
    }
})
player.onChat("4", function () {
    x = x + 0
    y = x + 0
    z = x + 0
    for (let índice = 0; índice <= numero_de_cuadros; índice++) {
        blocks.fill(
        material,
        world(x - lado, y, z - lado),
        world(x + lado, y, z + lado),
        FillOperation.Outline
        )
        blocks.fill(
        AIR,
        world(x - (lado - 1), y, z - (lado - 1)),
        world(x + (lado - 1), y, z + (lado - 1)),
        FillOperation.Replace
        )
        lado += -2
    }
})
