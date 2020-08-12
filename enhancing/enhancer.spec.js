const enhancer = require('./enhancer.js');
// test away!

const item1 = {
    name: "Handgun",
    durability: 50,
    enhancement: 7,
  };
  const item2 = {
    name: "Light Machine Gum",
    durability: 50,
    enhancement: 10,
  };
  const item3 = {
    name: "Assult Rifle",
    durability: 70,
    enhancement: 20,
  };
  const item4 = {
    name: "Shotgun",
    durability: 70,
    enhancement: 20,
  };
  const item5 = {
    name: "Sub Machine Gun",
    durability: 70,
    enhancement: 7,
  };
  const item6 = {
    name: "Designated Marksman Rifle",
    durability: 70,
    enhancement: 20,
  };
  const item7 = {
    name: "Sniper Rifle",
    durability: 20,
    enhancement: 0,
  };
  const item8 = {
    name: "Rocket Launcher",
    durability: 20,
    enhancement: 5,
  };
  describe("enhancer module", () => {
    describe("repair function", () => {
      it("can return a new item with 100 durability", () => {
        const expectedDurability = 100;
        const actualOutput = enhancer.repair(item1);
        expect(actualOutput.durability).toBe(expectedDurability);
      });
    });
    describe("fail function", () => {
      it("can return a new item with -5 durability if enhancement is < 15", () => {
        const expectedDurability = 45;
        const actualOutput = enhancer.fail(item2);
        expect(actualOutput.durability).toBe(expectedDurability);
      });
      it("can return a new item with -10 durability if enhancement is >= 15", () => {
        const expectedDurability = 60;
        const actualOutput = enhancer.fail(item3);
        expect(actualOutput.durability).toBe(expectedDurability);
      });
      it("can return a new item with -1 enhancement if enhancement is >= 16", () => {
        const expectedEnhancement = 19;
        const actualOutput = enhancer.fail(item4);
        expect(actualOutput.enhancement).toBe(expectedEnhancement);
      });
    });
    describe("succeed function", () => {
      it("can return a new item with + 1 enhancement", () => {
        const expectedEnhancement = 8;
        const actualOutput = enhancer.succeed(item5);
        expect(actualOutput.enhancement).toBe(expectedEnhancement);
      });
      it("can return a new item with unchanged enhancement if already 20", () => {
        const expectedEnhancement = 20;
        const actualOutput = enhancer.succeed(item6);
        expect(actualOutput.enhancement).toBe(expectedEnhancement);
      });
    });
    describe("get function", () => {
      it("returns an unchanged name if enhancement is 0", () => {
        const expectedName = "Sniper Rifle";
        const actualOutput = enhancer.get(item7);
        expect(actualOutput.name).toBe(expectedName);
      });
      it("returns a changed name if enhancement is > 0", () => {
        const expectedName = "[+5] Rocket Launcher";
        const actualOutput = enhancer.get(item8);
        expect(actualOutput.name).toBe(expectedName);
      });
    });
  });