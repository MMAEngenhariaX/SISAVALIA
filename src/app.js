const fields = {
  osNumber: document.querySelector("#osNumber"),
  osDate: document.querySelector("#osDate"),
  inspectionDate: document.querySelector("#inspectionDate"),
  proponent: document.querySelector("#proponent"),
  purpose: document.querySelector("#purpose"),
  objective: document.querySelector("#objective"),
  address: document.querySelector("#address"),
  city: document.querySelector("#city"),
  state: document.querySelector("#state"),
  propertyType: document.querySelector("#propertyType"),
  builtArea: document.querySelector("#builtArea"),
  landArea: document.querySelector("#landArea"),
  standard: document.querySelector("#standard"),
  conservation: document.querySelector("#conservation"),
  locationScore: document.querySelector("#locationScore"),
  bedrooms: document.querySelector("#bedrooms"),
  bathrooms: document.querySelector("#bathrooms"),
  parking: document.querySelector("#parking"),
  cpfCnpj: document.querySelector("#cpfCnpj"),
  addressNumber: document.querySelector("#addressNumber"),
  addressComplement: document.querySelector("#addressComplement"),
  neighborhood: document.querySelector("#neighborhood"),
  postalCode: document.querySelector("#postalCode"),
  condominiumName: document.querySelector("#condominiumName"),
  registrationNumber: document.querySelector("#registrationNumber"),
  registryOffice: document.querySelector("#registryOffice"),
  registrationDate: document.querySelector("#registrationDate"),
  propertyNotes: document.querySelector("#propertyNotes"),
  predominantUse: document.querySelector("#predominantUse"),
  accessType: document.querySelector("#accessType"),
  riskArea: document.querySelector("#riskArea"),
  fronts: document.querySelector("#fronts"),
  frontage: document.querySelector("#frontage"),
  topography: document.querySelector("#topography"),
  blockPosition: document.querySelector("#blockPosition"),
  idealFraction: document.querySelector("#idealFraction"),
  surface: document.querySelector("#surface"),
  gradeFormat: document.querySelector("#gradeFormat"),
  urbanInfrastructure: document.querySelector("#urbanInfrastructure"),
  publicServices: document.querySelector("#publicServices"),
  propertyUse: document.querySelector("#propertyUse"),
  buildingPosition: document.querySelector("#buildingPosition"),
  occupancy: document.querySelector("#occupancy"),
  suites: document.querySelector("#suites"),
  lavatories: document.querySelector("#lavatories"),
  floors: document.querySelector("#floors"),
  apparentAge: document.querySelector("#apparentAge"),
  windowFrames: document.querySelector("#windowFrames"),
  roofCeiling: document.querySelector("#roofCeiling"),
  waterSupply: document.querySelector("#waterSupply"),
  sewage: document.querySelector("#sewage"),
  wallSystem: document.querySelector("#wallSystem"),
  deploymentType: document.querySelector("#deploymentType"),
  previouslyOccupied: document.querySelector("#previouslyOccupied"),
  unregisteredArea: document.querySelector("#unregisteredArea"),
  coveredParking: document.querySelector("#coveredParking"),
  uncoveredParking: document.querySelector("#uncoveredParking"),
  latitude: document.querySelector("#latitude"),
  longitude: document.querySelector("#longitude"),
  roomsDescription: document.querySelector("#roomsDescription"),
  propertyInfrastructure: document.querySelector("#propertyInfrastructure"),
  condominiumFeatures: document.querySelector("#condominiumFeatures"),
  documentationMatches: document.querySelector("#documentationMatches"),
  stability: document.querySelector("#stability"),
  apparentDefects: document.querySelector("#apparentDefects"),
  habitability: document.querySelector("#habitability"),
  environmentalFactors: document.querySelector("#environmentalFactors"),
  datecSinat: document.querySelector("#datecSinat"),
  inspectionContact: document.querySelector("#inspectionContact"),
  inspectionPhone: document.querySelector("#inspectionPhone"),
  contactDate: document.querySelector("#contactDate"),
  arrivalTime: document.querySelector("#arrivalTime"),
  departureTime: document.querySelector("#departureTime"),
  appointmentDate: document.querySelector("#appointmentDate"),
  appointmentTime: document.querySelector("#appointmentTime"),
  valuedFactors: document.querySelector("#valuedFactors"),
  restrictiveFactors: document.querySelector("#restrictiveFactors"),
  inspectionHistory: document.querySelector("#inspectionHistory"),
  marketPerformance: document.querySelector("#marketPerformance"),
  offersLevel: document.querySelector("#offersLevel"),
  liquidity: document.querySelector("#liquidity"),
  effectivePeriod: document.querySelector("#effectivePeriod"),
  guaranteeAccepted: document.querySelector("#guaranteeAccepted"),
  artRrt: document.querySelector("#artRrt"),
  autonomousUnits: document.querySelector("#autonomousUnits"),
  finalNotes: document.querySelector("#finalNotes"),
};

const samplesBody = document.querySelector("#samplesBody");
const checklist = document.querySelector("#checklist");
const modelReport = document.querySelector("#modelReport");
const reportPreview = document.querySelector("#reportPreview");
const diagnosticCards = document.querySelector("#diagnosticCards");
const diagnosticSummary = document.querySelector("#diagnosticSummary");
const reviewVerdict = document.querySelector("#reviewVerdict");
const reviewMessage = document.querySelector("#reviewMessage");
const reviewResults = document.querySelector("#reviewResults");
const exportStatus = document.querySelector("#exportStatus");
const projectName = document.querySelector("#projectName");
const projectStatus = document.querySelector("#projectStatus");
const projectList = document.querySelector("#projectList");
const projectImportFile = document.querySelector("#projectImportFile");
const sampleImportFile = document.querySelector("#sampleImportFile");
const importMode = document.querySelector("#importMode");
const importStatus = document.querySelector("#importStatus");
const variableControls = document.querySelector("#variableControls");
const chartCanvases = {
  adherence: document.querySelector("#adherenceChart"),
  residual: document.querySelector("#residualChart"),
  normality: document.querySelector("#normalityChart"),
  correlation: document.querySelector("#correlationChart"),
};

const options = {
  purpose: ["GARANTIA DE CREDITO/EGI", "GARANTIA DE CREDITO/CONSORCIO", "VENDA", "LOCACAO"],
  objective: ["VALOR DE MERCADO DE COMPRA E VENDA", "VALOR DE MERCADO DE LOCACAO", "CUSTO DE REEDICAO"],
  propertyType: ["CASA", "APARTAMENTO", "TERRENO", "SALA", "LOJA", "GALPAO"],
  standard: [
    ["1", "BAIXO"],
    ["2", "NORMAL/MEDIO"],
    ["3", "ALTO"],
  ],
  conservation: [
    ["1", "REGULAR"],
    ["2", "BOM/BOA"],
    ["3", "NOVO/OTIMO"],
  ],
  locationScore: [
    ["1", "PERIFERICA"],
    ["2", "NORMAL/MEDIA"],
    ["3", "CENTRAL/BOA"],
  ],
  riskArea: ["NAO", "SIM", "NAO VERIFICADO"],
  previouslyOccupied: ["NAO INFORMADO", "NAO", "SIM"],
  documentationMatches: ["NAO VERIFICADO", "SIM", "NAO"],
  stability: ["NAO VERIFICADO", "SIM", "NAO"],
  apparentDefects: ["NAO VERIFICADO", "NAO", "SIM"],
  habitability: ["NAO VERIFICADO", "SIM", "NAO"],
  environmentalFactors: ["NAO VERIFICADO", "NAO", "SIM"],
  datecSinat: ["NAO VERIFICADO", "NAO", "SIM"],
  guaranteeAccepted: ["NAO DEFINIDO", "SIM", "NAO", "SIM, COM RESSALVAS"],
};

const PROJECT_STORAGE_KEY = "sisavalia.projects.v1";

function defaultModelConfig() {
  return {
    area: { active: true, transform: "ln" },
    location: { active: true, transform: "x" },
    standard: { active: true, transform: "x" },
    conservation: { active: true, transform: "x" },
  };
}

const state = {
  samples: [],
  result: null,
  error: "",
  modelConfig: defaultModelConfig(),
  activeProjectId: null,
  projectDirty: false,
};

const modelVariables = [
  {
    key: "area",
    label: "Area",
    hint: "Area da amostra em m2",
    sampleValue: (sample) => sample.area,
    subjectValue: () => numeric(fields.builtArea.value),
  },
  {
    key: "location",
    label: "Local",
    hint: "Nota 1 a 3 de localizacao",
    sampleValue: (sample) => sample.location,
    subjectValue: () => numeric(fields.locationScore.value),
  },
  {
    key: "standard",
    label: "Padrao",
    hint: "Nota 1 a 3 de padrao construtivo",
    sampleValue: (sample) => sample.standard,
    subjectValue: () => numeric(fields.standard.value),
  },
  {
    key: "conservation",
    label: "Conservacao",
    hint: "Nota 1 a 3 de estado de conservacao",
    sampleValue: (sample) => sample.conservation,
    subjectValue: () => numeric(fields.conservation.value),
  },
];

const transformOptions = [
  ["x", "x"],
  ["ln", "ln(x)"],
  ["inverse", "1/x"],
  ["sqrt", "sqrt(x)"],
  ["square", "x²"],
];

function populateSelect(select, values) {
  select.innerHTML = "";
  values.forEach((item) => {
    const option = document.createElement("option");
    if (Array.isArray(item)) {
      option.value = item[0];
      option.textContent = item[1];
    } else {
      option.value = item;
      option.textContent = item;
    }
    select.appendChild(option);
  });
}

function money(value) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function number(value, digits = 2) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString("pt-BR", { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function numeric(value) {
  const normalized = String(value)
    .trim()
    .replace(/\s/g, "")
    .replace(/R\$/gi, "")
    .replace(/\.(?=\d{3}(\D|$))/g, "")
    .replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function detectDelimiter(text) {
  const firstLine = text.split(/\r?\n/).find((line) => line.trim()) || "";
  const delimiters = [",", ";", "\t"];
  return delimiters
    .map((delimiter) => ({ delimiter, count: firstLine.split(delimiter).length }))
    .sort((a, b) => b.count - a.count)[0].delimiter;
}

function parseDelimited(text) {
  const delimiter = detectDelimiter(text);
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell.trim());
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }
  row.push(cell.trim());
  if (row.some((value) => value !== "")) rows.push(row);
  return rows;
}

function findColumn(headers, aliases) {
  const normalizedAliases = aliases.map(normalizeText);
  return headers.findIndex((header) => normalizedAliases.includes(normalizeText(header)));
}

function codedValue(raw, map, fallback = 2) {
  if (raw === undefined || raw === null || raw === "") return fallback;
  const asNumber = numeric(raw);
  if ([1, 2, 3].includes(asNumber)) return asNumber;
  const key = normalizeText(raw);
  for (const [terms, value] of map) {
    if (terms.some((term) => key.includes(term))) return value;
  }
  return fallback;
}

function parseSamplesFile(text) {
  const rows = parseDelimited(text);
  if (rows.length < 2) throw new Error("O arquivo precisa ter cabecalho e pelo menos uma linha de dados.");
  const headers = rows[0];
  const indexes = {
    source: findColumn(headers, ["fonte", "endereco", "endereço", "fonte/endereco", "fonte endereco", "informante", "descricao"]),
    price: findColumn(headers, ["preco", "preço", "valor", "valor total", "valor de oferta", "valor venda", "preco total"]),
    area: findColumn(headers, ["area", "área", "area construida", "área construída", "area privativa", "area referencia", "m2"]),
    location: findColumn(headers, ["local", "localizacao", "localização", "situacao", "bairro", "nota local"]),
    standard: findColumn(headers, ["padrao", "padrão", "padrao construtivo", "acabamento", "nota padrao"]),
    conservation: findColumn(headers, ["conservacao", "conservação", "estado conservacao", "estado", "nota conservacao"]),
  };
  if (indexes.price < 0 || indexes.area < 0) {
    throw new Error("Nao encontrei colunas obrigatorias de preco/valor e area.");
  }
  const locationMap = [
    [["perifer", "ruim", "baixo"], 1],
    [["normal", "medio", "media", "regular"], 2],
    [["central", "boa", "bom", "alto", "excelente"], 3],
  ];
  const standardMap = [
    [["baixo", "simples", "popular"], 1],
    [["normal", "medio", "media", "regular"], 2],
    [["alto", "superior", "luxo"], 3],
  ];
  const conservationMap = [
    [["regular", "ruim", "baixo"], 1],
    [["bom", "boa", "medio", "media", "normal"], 2],
    [["novo", "otimo", "otima", "excelente"], 3],
  ];
  return rows.slice(1).map((row, index) => ({
    source: row[indexes.source] || `Amostra importada ${index + 1}`,
    price: numeric(row[indexes.price]),
    area: numeric(row[indexes.area]),
    location: codedValue(row[indexes.location], locationMap, 2),
    standard: codedValue(row[indexes.standard], standardMap, 2),
    conservation: codedValue(row[indexes.conservation], conservationMap, 2),
  })).filter((sample) => sample.price > 0 && sample.area > 0);
}

function setImportStatus(message, status = "") {
  importStatus.textContent = message;
  importStatus.className = `import-status ${status}`.trim();
}

function transformLabel(transform) {
  return (transformOptions.find(([value]) => value === transform) || ["x", "x"])[1];
}

function applyTransform(value, transform) {
  const x = numeric(value);
  if (!Number.isFinite(x)) return NaN;
  if (transform === "ln") return x > 0 ? Math.log(x) : NaN;
  if (transform === "inverse") return x !== 0 ? 1 / x : NaN;
  if (transform === "sqrt") return x >= 0 ? Math.sqrt(x) : NaN;
  if (transform === "square") return x ** 2;
  return x;
}

function activeModelVariables() {
  return modelVariables
    .map((variable) => ({
      ...variable,
      config: state.modelConfig[variable.key] || { active: false, transform: "x" },
    }))
    .filter((variable) => variable.config.active);
}

function renderVariableControls() {
  variableControls.innerHTML = "";
  modelVariables.forEach((variable) => {
    const config = state.modelConfig[variable.key];
    const row = document.createElement("div");
    row.className = "variable-row";
    row.innerHTML = `
      <label>
        <input type="checkbox" ${config.active ? "checked" : ""} data-key="${variable.key}" data-action="active" />
        <span>${variable.label}</span>
      </label>
      <select data-key="${variable.key}" data-action="transform">
        ${transformOptions.map(([value, label]) => `<option value="${value}" ${config.transform === value ? "selected" : ""}>${label}</option>`).join("")}
      </select>
      <span class="variable-hint">${variable.hint}</span>
    `;
    row.querySelectorAll("input, select").forEach((control) => {
      control.addEventListener("input", () => {
        const key = control.dataset.key;
        if (control.dataset.action === "active") state.modelConfig[key].active = control.checked;
        if (control.dataset.action === "transform") state.modelConfig[key].transform = control.value;
        state.result = null;
        state.error = "";
        markProjectDirty();
        updateAll();
      });
    });
    variableControls.appendChild(row);
  });
}

function sampleRow(sample, index) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input data-key="source" value="${sample.source || ""}" /></td>
    <td><input data-key="price" type="number" step="1000" value="${sample.price || ""}" /></td>
    <td><input data-key="area" type="number" step="0.01" value="${sample.area || ""}" /></td>
    <td><select data-key="location">${selectOptions(options.locationScore, sample.location)}</select></td>
    <td><select data-key="standard">${selectOptions(options.standard, sample.standard)}</select></td>
    <td><select data-key="conservation">${selectOptions(options.conservation, sample.conservation)}</select></td>
    <td><button class="delete-row" title="Remover amostra">×</button></td>
  `;
  tr.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.key;
      state.samples[index][key] = ["price", "area", "location", "standard", "conservation"].includes(key)
        ? numeric(input.value)
        : input.value;
      state.result = null;
      markProjectDirty();
      updateAll();
    });
  });
  tr.querySelector(".delete-row").addEventListener("click", () => {
    state.samples.splice(index, 1);
    state.result = null;
    markProjectDirty();
    renderSamples();
    updateAll();
  });
  return tr;
}

function selectOptions(values, selected) {
  return values.map(([value, label]) => `<option value="${value}" ${Number(value) === Number(selected) ? "selected" : ""}>${label}</option>`).join("");
}

function renderSamples() {
  samplesBody.innerHTML = "";
  state.samples.forEach((sample, index) => samplesBody.appendChild(sampleRow(sample, index)));
}

function addSample(sample = {}) {
  state.error = "";
  state.samples.push({
    source: sample.source || "Amostra de mercado",
    price: sample.price || 0,
    area: sample.area || 0,
    location: sample.location || 2,
    standard: sample.standard || 2,
    conservation: sample.conservation || 2,
  });
  markProjectDirty();
  renderSamples();
  updateAll();
}

function transpose(matrix) {
  return matrix[0].map((_, col) => matrix.map((row) => row[col]));
}

function multiply(a, b) {
  return a.map((row) => b[0].map((_, j) => row.reduce((sum, _, k) => sum + row[k] * b[k][j], 0)));
}

function inverse(matrix) {
  const n = matrix.length;
  const augmented = matrix.map((row, i) => [...row, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  for (let i = 0; i < n; i += 1) {
    let pivot = i;
    for (let r = i + 1; r < n; r += 1) {
      if (Math.abs(augmented[r][i]) > Math.abs(augmented[pivot][i])) pivot = r;
    }
    if (Math.abs(augmented[pivot][i]) < 1e-12) throw new Error("Matriz singular. Revise variaveis ou amostras.");
    [augmented[i], augmented[pivot]] = [augmented[pivot], augmented[i]];
    const divisor = augmented[i][i];
    for (let c = 0; c < 2 * n; c += 1) augmented[i][c] /= divisor;
    for (let r = 0; r < n; r += 1) {
      if (r === i) continue;
      const factor = augmented[r][i];
      for (let c = 0; c < 2 * n; c += 1) augmented[r][c] -= factor * augmented[i][c];
    }
  }
  return augmented.map((row) => row.slice(n));
}

function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * Math.abs(x));
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

function normalCdf(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function correlation(a, b) {
  const meanA = a.reduce((sum, value) => sum + value, 0) / a.length;
  const meanB = b.reduce((sum, value) => sum + value, 0) / b.length;
  const numerator = a.reduce((sum, value, i) => sum + (value - meanA) * (b[i] - meanB), 0);
  const denomA = Math.sqrt(a.reduce((sum, value) => sum + (value - meanA) ** 2, 0));
  const denomB = Math.sqrt(b.reduce((sum, value) => sum + (value - meanB) ** 2, 0));
  return denomA && denomB ? numerator / (denomA * denomB) : 0;
}

function statusRank(status) {
  return status === "fail" ? 2 : status === "warn" ? 1 : 0;
}

function worstStatus(statuses) {
  return statuses.reduce((worst, status) => (statusRank(status) > statusRank(worst) ? status : worst), "ok");
}

function pct(value) {
  return `${number(value, 1)}%`;
}

function significanceGrade(pValue) {
  const p = pValue * 100;
  if (p <= 10) return "III";
  if (p <= 20) return "II";
  if (p <= 30) return "I";
  return "Nao atende";
}

function createDiagnostics({ valid, n, k, pValues, standardizedResiduals, correlations, variableNames }) {
  const absResiduals = standardizedResiduals.map(Math.abs);
  const within1 = standardizedResiduals.filter((value) => Math.abs(value) <= 1).length / n * 100;
  const within164 = standardizedResiduals.filter((value) => Math.abs(value) <= 1.64).length / n * 100;
  const within196 = standardizedResiduals.filter((value) => Math.abs(value) <= 1.96).length / n * 100;
  const normalDiff = Math.max(Math.abs(within1 - 68), Math.abs(within164 - 90), Math.abs(within196 - 95));
  const normalStatus = normalDiff <= 15 ? "ok" : normalDiff <= 25 ? "warn" : "fail";

  const outliers2 = absResiduals
    .map((value, index) => ({ index, value, source: valid[index].source || `Amostra ${index + 1}` }))
    .filter((item) => item.value > 2)
    .sort((a, b) => b.value - a.value);
  const outliers3 = outliers2.filter((item) => item.value > 3);
  const outlierStatus = outliers3.length ? "fail" : outliers2.length ? "warn" : "ok";

  const highCorrelations = [];
  correlations.forEach((row, i) => {
    row.forEach((value, j) => {
      if (j <= i) return;
      if (Math.abs(value) >= 0.8) highCorrelations.push({ a: variableNames[i], b: variableNames[j], value });
    });
  });
  const multicolStatus = highCorrelations.some((item) => Math.abs(item.value) >= 0.9) ? "fail" : highCorrelations.length ? "warn" : "ok";

  const significance = pValues.slice(1).map((pValue, index) => ({
    name: variableNames[index],
    pValue,
    grade: significanceGrade(pValue),
  }));
  const maxP = Math.max(...pValues.slice(1)) * 100;
  const significanceStatus = maxP <= 20 ? "ok" : maxP <= 30 ? "warn" : "fail";

  const micro = {
    gradeIII: 6 * (k + 1),
    gradeII: 4 * (k + 1),
    gradeI: 3 * (k + 1),
  };
  const micronumStatus = n >= micro.gradeII ? "ok" : n >= micro.gradeI ? "warn" : "fail";

  const overall = worstStatus([normalStatus, outlierStatus, multicolStatus, significanceStatus, micronumStatus]);
  return {
    overall,
    normality: { status: normalStatus, within1, within164, within196, maxDeviation: normalDiff },
    outliers: { status: outlierStatus, above2: outliers2, above3: outliers3 },
    multicollinearity: { status: multicolStatus, highCorrelations },
    significance: { status: significanceStatus, maxP, variables: significance },
    micronumerosity: { status: micronumStatus, n, k, ...micro },
  };
}

function runRegression() {
  const activeVariables = activeModelVariables();
  if (!activeVariables.length) throw new Error("Selecione pelo menos uma variavel independente.");
  const rawValid = state.samples.filter((s) => s.price > 0 && s.area > 0);
  const valid = rawValid.filter((sample) => activeVariables.every((variable) => Number.isFinite(applyTransform(variable.sampleValue(sample), variable.config.transform))));
  const y = valid.map((s) => Math.log(s.price / s.area));
  const x = valid.map((sample) => [1, ...activeVariables.map((variable) => applyTransform(variable.sampleValue(sample), variable.config.transform))]);
  if (valid.length <= activeVariables.length + 1) {
    throw new Error("A amostra valida e insuficiente para a quantidade de variaveis selecionadas.");
  }
  const xt = transpose(x);
  const xtx = multiply(xt, x);
  const xtxInv = inverse(xtx);
  const xty = multiply(xt, y.map((v) => [v]));
  const beta = multiply(xtxInv, xty).map((row) => row[0]);
  const fitted = x.map((row) => row.reduce((sum, value, i) => sum + value * beta[i], 0));
  const residuals = y.map((value, i) => value - fitted[i]);
  const meanY = y.reduce((a, b) => a + b, 0) / y.length;
  const sse = residuals.reduce((sum, value) => sum + value * value, 0);
  const sst = y.reduce((sum, value) => sum + (value - meanY) ** 2, 0);
  const n = valid.length;
  const p = beta.length;
  const k = p - 1;
  const df = n - p;
  const mse = sse / Math.max(df, 1);
  const r2 = 1 - sse / sst;
  const adjR2 = 1 - (1 - r2) * ((n - 1) / Math.max(n - p, 1));
  const standardErrors = xtxInv.map((row, i) => Math.sqrt(Math.max(row[i] * mse, 0)));
  const tStats = beta.map((b, i) => b / (standardErrors[i] || Infinity));
  const pValues = tStats.map((t) => 2 * (1 - normalCdf(Math.abs(t))));
  const residualStd = Math.sqrt(mse);
  const standardizedResiduals = residuals.map((value) => value / (residualStd || 1));
  const observedUnits = valid.map((s) => s.price / s.area);
  const fittedUnits = fitted.map((value) => Math.exp(value));
  const variableNames = activeVariables.map((variable) => `${transformLabel(variable.config.transform).replace("x", variable.label.toUpperCase())}`);
  const variableColumns = activeVariables.map((variable) => valid.map((sample) => applyTransform(variable.sampleValue(sample), variable.config.transform)));
  const correlations = variableColumns.map((colA) => variableColumns.map((colB) => correlation(colA, colB)));
  const diagnostics = createDiagnostics({ valid, n, k, pValues, standardizedResiduals, correlations, variableNames });
  const subject = [1, ...activeVariables.map((variable) => applyTransform(variable.subjectValue(), variable.config.transform))];
  if (subject.some((value) => !Number.isFinite(value))) {
    throw new Error("Os atributos do avaliando nao atendem as transformacoes escolhidas.");
  }
  const logUnit = subject.reduce((sum, value, i) => sum + value * beta[i], 0);
  const leverage = multiply(multiply([subject], xtxInv), subject.map((v) => [v]))[0][0];
  const predictionSe = Math.sqrt(Math.max(mse * (1 + leverage), 0));
  const z80 = 1.2815515655446004;
  const unit = Math.exp(logUnit);
  const lowerUnit = Math.exp(logUnit - z80 * predictionSe);
  const upperUnit = Math.exp(logUnit + z80 * predictionSe);
  const area = Math.max(numeric(fields.builtArea.value), 0);
  const value = unit * area;
  const lower = lowerUnit * area;
  const upper = upperUnit * area;
  const amplitude = value > 0 ? ((upper - lower) / value) * 100 : Infinity;

  return {
    valid,
    n,
    k,
    beta,
    residuals,
    fitted,
    r2,
    adjR2,
    mse,
    pValues,
    value,
    unit,
    lower,
    upper,
    amplitude,
    observedUnits,
    fittedUnits,
    standardizedResiduals,
    variableNames,
    correlations,
    activeVariables,
    diagnostics,
    foundation: classifyFoundation(n, k, pValues),
    precision: classifyPrecision(amplitude),
  };
}

function classifyFoundation(n, k, pValues) {
  const maxP = Math.max(...pValues.slice(1)) * 100;
  const hasN3 = n >= 6 * (k + 1) && maxP <= 10;
  const hasN2 = n >= 4 * (k + 1) && maxP <= 20;
  const hasN1 = n >= 3 * (k + 1) && maxP <= 30;
  if (hasN3) return "III";
  if (hasN2) return "II";
  if (hasN1) return "I";
  return "Nao enquadrado";
}

function classifyPrecision(amplitude) {
  if (amplitude <= 30) return "III";
  if (amplitude <= 50) return "II";
  return "I";
}

function buildChecks() {
  const result = state.result;
  const samplesCount = state.samples.filter((s) => s.price > 0 && s.area > 0).length;
  const checks = [
    {
      ok: fields.osNumber.value.trim().length > 0,
      label: "OS identificada para rastreabilidade do laudo.",
    },
    {
      ok: fields.inspectionDate.value.trim().length > 0,
      label: "Data de vistoria informada, conforme exigencia de caracterizacao do bem.",
    },
    {
      ok: numeric(fields.builtArea.value) > 0 && numeric(fields.landArea.value) > 0,
      label: "Area do imovel avaliando preenchida.",
    },
    {
      ok: samplesCount >= 30,
      warn: samplesCount >= 15,
      label: "Pesquisa de mercado com 30 dados para aderir ao criterio tecnico de fundamentacao.",
    },
    {
      ok: Boolean(result && result.n >= 3 * (result.k + 1)),
      label: "Micronumerosidade minima ABNT: n >= 3(k+1).",
    },
    {
      ok: Boolean(result && result.foundation !== "Nao enquadrado"),
      label: "Modelo enquadrado em grau de fundamentacao pela NBR 14653-2.",
    },
    {
      ok: Boolean(result && ["III", "II", "I"].includes(result.precision)),
      label: "Precisao calculada pelo intervalo de confianca de 80%.",
    },
    {
      ok: Boolean(result),
      label: "Memoria de calculo e equacao disponiveis para o laudo.",
    },
    {
      ok: Boolean(result && result.diagnostics.normality.status === "ok"),
      warn: Boolean(result && result.diagnostics.normality.status === "warn"),
      label: "Normalidade dos residuos em faixas compativeis com curva normal.",
    },
    {
      ok: Boolean(result && result.diagnostics.outliers.status === "ok"),
      warn: Boolean(result && result.diagnostics.outliers.status === "warn"),
      label: "Outliers verificados por residuos padronizados.",
    },
    {
      ok: Boolean(result && result.diagnostics.multicollinearity.status === "ok"),
      warn: Boolean(result && result.diagnostics.multicollinearity.status === "warn"),
      label: "Multicolinearidade verificada por matriz de correlacoes.",
    },
  ];
  return checks;
}

function renderChecks() {
  const checks = buildChecks();
  checklist.innerHTML = "";
  checks.forEach((check) => {
    const li = document.createElement("li");
    const status = check.ok ? "ok" : check.warn ? "warn" : "fail";
    li.innerHTML = `<span class="checkmark ${status === "ok" ? "" : status}">${status === "ok" ? "✓" : "!"}</span><span>${check.label}</span>`;
    checklist.appendChild(li);
  });
  const failures = checks.filter((check) => !check.ok && !check.warn).length;
  const warnings = checks.filter((check) => !check.ok && check.warn).length;
  const dot = document.querySelector("#overallStatusDot");
  const text = document.querySelector("#overallStatusText");
  dot.className = `status-dot ${failures ? "fail" : warnings ? "warn" : ""}`;
  text.textContent = failures ? `${failures} pendencias criticas` : warnings ? `${warnings} alertas tecnicos` : "Pronto para revisao";
}

function buildReportReview() {
  const r = state.result;
  const validSamples = state.samples.filter((sample) => sample.price > 0 && sample.area > 0);
  const issues = [];
  const add = (severity, title, detail, anchor) => issues.push({ severity, title, detail, anchor });
  const requiredFields = [
    [fields.osNumber, "Numero da OS", "#os"],
    [fields.osDate, "Data da OS", "#os"],
    [fields.inspectionDate, "Data da vistoria", "#os"],
    [fields.proponent, "Proponente", "#os"],
    [fields.address, "Endereco do imovel", "#avaliando"],
    [fields.city, "Cidade", "#avaliando"],
    [fields.state, "UF", "#avaliando"],
  ];

  requiredFields.forEach(([field, label, anchor]) => {
    if (!field.value.trim()) add("critical", `${label} nao informado`, "Preencha o campo para completar a identificacao e a rastreabilidade do laudo.", anchor);
  });

  const builtArea = numeric(fields.builtArea.value);
  const landArea = numeric(fields.landArea.value);
  if (builtArea <= 0) add("critical", "Area construida invalida", "Informe uma area construida maior que zero para calcular o valor total.", "#avaliando");
  if (landArea <= 0) add("critical", "Area do terreno invalida", "Informe uma area de terreno maior que zero para caracterizar o imovel.", "#avaliando");
  if (builtArea > 0 && landArea > 0 && builtArea > landArea * 3) {
    add("warning", "Relacao entre areas atipica", "A area construida supera tres vezes a area do terreno. Confirme pavimentos e dados cadastrais.", "#avaliando");
  }

  if (fields.state.value.trim() && !/^[A-Za-z]{2}$/.test(fields.state.value.trim())) {
    add("critical", "UF invalida", "Use a sigla da unidade federativa com duas letras.", "#avaliando");
  }

  if (!fields.registrationNumber.value.trim() || !fields.registryOffice.value.trim()) {
    add("warning", "Identificacao registral incompleta", "Informe matricula e cartorio, ou justifique a indisponibilidade nas observacoes cadastrais.", "#avaliando");
  }
  if (!fields.inspectionContact.value.trim() || !fields.arrivalTime.value || !fields.departureTime.value) {
    add("warning", "Registro de vistoria incompleto", "Preencha contato, hora de chegada e hora de saida da vistoria.", "#avaliando");
  }
  if (!fields.latitude.value || !fields.longitude.value) {
    add("warning", "Coordenadas nao informadas", "Registre latitude e longitude para conferir a localizacao do avaliando.", "#avaliando");
  }

  if (fields.osDate.value && fields.inspectionDate.value && fields.inspectionDate.value < fields.osDate.value) {
    add("warning", "Vistoria anterior a OS", "Confirme as datas, pois a vistoria foi registrada antes da emissao da ordem de servico.", "#os");
  }

  if (!validSamples.length) {
    add("critical", "Pesquisa de mercado ausente", "Inclua dados validos com preco e area antes da emissao do laudo.", "#amostras");
  } else {
    if (validSamples.length < 15) add("critical", "Amostra insuficiente", `Foram encontrados ${validSamples.length} dados validos; amplie a pesquisa de mercado.`, "#amostras");
    else if (validSamples.length < 30) add("warning", "Pesquisa abaixo de 30 dados", `A pesquisa possui ${validSamples.length} dados validos. Revise o enquadramento e a representatividade.`, "#amostras");

    const missingSources = validSamples.filter((sample) => !String(sample.source || "").trim()).length;
    if (missingSources) add("warning", "Fontes incompletas", `${missingSources} amostra(s) nao possuem fonte ou endereco identificavel.`, "#amostras");

    if (builtArea > 0) {
      const areas = validSamples.map((sample) => sample.area);
      const minArea = Math.min(...areas);
      const maxArea = Math.max(...areas);
      if (builtArea < minArea || builtArea > maxArea) {
        add("warning", "Avaliando fora do intervalo amostral", `A area de ${number(builtArea)} m2 esta fora da faixa pesquisada de ${number(minArea)} a ${number(maxArea)} m2.`, "#amostras");
      }
    }
  }

  if (!r || state.error) {
    add("critical", "Modelo inferencial nao validado", state.error ? `Corrija o calculo: ${state.error}` : "Calcule o modelo para gerar valor, intervalo, fundamentacao e diagnosticos.", "#modelo");
  } else {
    if (r.foundation === "Nao enquadrado") add("critical", "Fundamentacao nao enquadrada", "O modelo nao atingiu os criterios minimos usados na classificacao de fundamentacao.", "#modelo");
    if (!Number.isFinite(r.adjR2) || r.adjR2 < 0.7) add("warning", "Poder explicativo reduzido", `O R2 ajustado e ${number(r.adjR2, 3)}. Revise variaveis, dados e especificacao do modelo.`, "#modelo");
    if (r.diagnostics.overall === "fail") add("critical", "Diagnostico estatistico reprovado", "Ha teste(s) com falha. Analise os cartoes de diagnostico antes de emitir.", "#modelo");
    else if (r.diagnostics.overall === "warn") add("warning", "Diagnostico estatistico com ressalvas", "Ha alerta(s) de normalidade, outliers, correlacao ou significancia a justificar.", "#modelo");
    if (!Number.isFinite(r.value) || r.value <= 0) add("critical", "Valor de avaliacao invalido", "O modelo nao produziu valor positivo e finito.", "#modelo");
  }

  add("manual", "Documentacao dominial e cadastral", "Conferir matricula, titularidade, areas documentais, restricoes e eventuais divergencias.", "#laudo");
  add("manual", "Registro fotografico e localizacao", "Confirmar fachada, logradouro, ambientes relevantes e mapa ou croqui do imovel.", "#laudo");
  add("manual", "Responsabilidade tecnica", fields.artRrt.value.trim() ? `Conferir ${fields.artRrt.value.trim()} e colher a assinatura do responsavel tecnico.` : "Anexar ART/RRT e colher a assinatura do responsavel tecnico antes da entrega.", "#avaliando");
  return issues;
}

function renderReportReview() {
  const issues = buildReportReview();
  const counts = {
    critical: issues.filter((item) => item.severity === "critical").length,
    warning: issues.filter((item) => item.severity === "warning").length,
    manual: issues.filter((item) => item.severity === "manual").length,
  };
  const verdict = counts.critical ? "Nao recomendado para emissao" : counts.warning ? "Apto com ressalvas" : "Pronto para revisao tecnica";
  reviewVerdict.textContent = verdict;
  reviewVerdict.className = counts.critical ? "fail" : counts.warning ? "warn" : "ok";
  reviewMessage.textContent = counts.critical
    ? "Corrija as pendencias criticas antes de exportar a versao final."
    : counts.warning
      ? "O laudo pode avancar apos justificativa dos alertas tecnicos."
      : "As verificacoes automaticas foram atendidas; conclua as conferencias manuais.";
  document.querySelector("#reviewCriticalCount").textContent = counts.critical;
  document.querySelector("#reviewWarningCount").textContent = counts.warning;
  document.querySelector("#reviewManualCount").textContent = counts.manual;
  reviewResults.innerHTML = issues.map((item) => `
    <article class="review-item ${item.severity}">
      <span class="review-icon" aria-hidden="true">${item.severity === "critical" ? "!" : item.severity === "warning" ? "!" : "i"}</span>
      <div><strong>${item.title}</strong><p>${item.detail}</p></div>
      <a href="${item.anchor}">${item.severity === "manual" ? "Verificar" : "Corrigir"}</a>
    </article>
  `).join("");
  return { issues, counts, verdict };
}

function renderMetrics() {
  const r = state.result;
  document.querySelector("#metricN").textContent = r ? r.n : "0";
  document.querySelector("#metricK").textContent = r ? r.k : "0";
  document.querySelector("#metricR2").textContent = r ? number(r.adjR2, 3) : "-";
  document.querySelector("#metricValue").textContent = r ? money(r.value) : "-";
  document.querySelector("#metricFoundation").textContent = r ? r.foundation : "-";
  document.querySelector("#metricPrecision").textContent = r ? r.precision : "-";
}

function diagnosticLabel(status) {
  if (status === "ok") return "Aprovado";
  if (status === "warn") return "Alerta";
  return "Critico";
}

function renderDiagnosticCard(title, status, value, detail, items = []) {
  const list = items.length ? `<ul class="diagnostic-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";
  return `
    <article class="diagnostic-card ${status === "ok" ? "" : status}">
      <h4>${title}</h4>
      <strong>${value}</strong>
      <p>${detail}</p>
      ${list}
    </article>
  `;
}

function renderDiagnostics() {
  const r = state.result;
  if (!r || state.error) {
    diagnosticSummary.textContent = "Aguardando modelo";
    diagnosticSummary.className = "pill";
    diagnosticCards.innerHTML = "";
    return;
  }
  const d = r.diagnostics;
  diagnosticSummary.textContent = diagnosticLabel(d.overall);
  diagnosticSummary.className = `pill ${d.overall === "ok" ? "" : d.overall}`.trim();
  diagnosticCards.innerHTML = [
    renderDiagnosticCard(
      "Normalidade",
      d.normality.status,
      `${pct(d.normality.within1)} | ${pct(d.normality.within164)} | ${pct(d.normality.within196)}`,
      "Residuos em [-1,+1], [-1,64,+1,64] e [-1,96,+1,96]. Referencias: 68%, 90% e 95%.",
    ),
    renderDiagnosticCard(
      "Outliers",
      d.outliers.status,
      `${d.outliers.above2.length} acima de |2|`,
      `${d.outliers.above3.length} amostra(s) acima de |3|.`,
      d.outliers.above2.slice(0, 3).map((item) => `${item.source}: ${number(item.value, 2)}`),
    ),
    renderDiagnosticCard(
      "Multicolinearidade",
      d.multicollinearity.status,
      `${d.multicollinearity.highCorrelations.length} correlacao(oes) alta(s)`,
      "Alerta quando |r| >= 0,80 entre variaveis independentes.",
      d.multicollinearity.highCorrelations.slice(0, 3).map((item) => `${item.a} x ${item.b}: ${number(item.value, 2)}`),
    ),
    renderDiagnosticCard(
      "Significancia",
      d.significance.status,
      `p max.: ${pct(d.significance.maxP)}`,
      "Classificacao auxiliar: <=10% grau III, <=20% grau II, <=30% grau I.",
      d.significance.variables.map((item) => `${item.name}: ${pct(item.pValue * 100)} (${item.grade})`),
    ),
    renderDiagnosticCard(
      "Micronumerosidade",
      d.micronumerosity.status,
      `${d.micronumerosity.n} dados / ${d.micronumerosity.k} variaveis`,
      `Minimos: grau III ${d.micronumerosity.gradeIII}, grau II ${d.micronumerosity.gradeII}, grau I ${d.micronumerosity.gradeI}.`,
    ),
    renderDiagnosticCard(
      "Diagnostico Geral",
      d.overall,
      diagnosticLabel(d.overall),
      "Leitura consolidada dos testes auxiliares. Requer revisao do responsavel tecnico.",
    ),
  ].join("");
}

function renderModelReport() {
  if (state.error) {
    modelReport.textContent = `Erro no calculo: ${state.error}`;
    return;
  }
  const r = state.result;
  if (!r) {
    modelReport.textContent = "Calcule o modelo para ver a memoria.";
    return;
  }
  const names = ["Intercepto", ...r.variableNames];
  const coefficients = r.beta.map((b, i) => `${names[i]} = ${number(b, 6)} | p aprox. ${number(r.pValues[i] * 100, 2)}%`).join("\n");
  const equationTerms = r.variableNames.map((name, i) => `b${i + 1}*${name}`).join(" + ");
  const d = r.diagnostics;
  const diagnosticLines = [
    `Normalidade: ${diagnosticLabel(d.normality.status)} | faixas ${pct(d.normality.within1)}, ${pct(d.normality.within164)}, ${pct(d.normality.within196)}`,
    `Outliers: ${d.outliers.above2.length} acima de |2|; ${d.outliers.above3.length} acima de |3|`,
    `Multicolinearidade: ${d.multicollinearity.highCorrelations.length} correlacao(oes) com |r| >= 0,80`,
    `Significancia: p max. ${pct(d.significance.maxP)} (${diagnosticLabel(d.significance.status)})`,
    `Micronumerosidade: n=${d.micronumerosity.n}; minimos grau III=${d.micronumerosity.gradeIII}, II=${d.micronumerosity.gradeII}, I=${d.micronumerosity.gradeI}`,
    `Diagnostico geral: ${diagnosticLabel(d.overall)}`,
  ].join("\n");
  modelReport.textContent = [
    `MODELO: ln(VALOR_UNITARIO) = b0${equationTerms ? ` + ${equationTerms}` : ""}`,
    "",
    coefficients,
    "",
    `Dados utilizados: ${r.n}`,
    `Variaveis independentes: ${r.k}`,
    `R2 ajustado: ${number(r.adjR2, 4)}`,
    `Amplitude IC 80%: ${number(r.amplitude, 2)}%`,
    `Grau de fundamentacao estimado: ${r.foundation}`,
    `Grau de precisao: ${r.precision}`,
    "",
    "DIAGNOSTICO ESTATISTICO:",
    diagnosticLines,
    "",
    `Valor unitario: ${money(r.unit)}/m2`,
    `Valor total adotado: ${money(r.value)}`,
    `Limite inferior: ${money(r.lower)}`,
    `Limite superior: ${money(r.upper)}`,
    "",
    "Observacao: esta versao inicial automatiza o nucleo matematico e checklist. A responsabilidade tecnica exige revisao do avaliador, anexos, ART/RRT e verificacao final conforme OS.",
  ].join("\n");
}

function chartContext(canvas) {
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return ctx;
}

function drawAxes(ctx, box, xLabel, yLabel) {
  ctx.strokeStyle = "#d7ded9";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(box.left, box.top);
  ctx.lineTo(box.left, box.bottom);
  ctx.lineTo(box.right, box.bottom);
  ctx.stroke();
  ctx.fillStyle = "#637068";
  ctx.font = "12px Arial";
  ctx.fillText(xLabel, box.left + 4, box.bottom + 26);
  ctx.save();
  ctx.translate(box.left - 36, box.bottom - 4);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
}

function scale(value, min, max, start, end) {
  if (max === min) return (start + end) / 2;
  return start + ((value - min) / (max - min)) * (end - start);
}

function extent(values, padding = 0.08) {
  let min = Math.min(...values);
  let max = Math.max(...values);
  const span = max - min || Math.abs(max) || 1;
  min -= span * padding;
  max += span * padding;
  return [min, max];
}

function drawEmptyChart(canvas, message = "Calcule o modelo para gerar o grafico.") {
  const ctx = chartContext(canvas);
  ctx.fillStyle = "#637068";
  ctx.font = "14px Arial";
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
  ctx.textAlign = "left";
}

function drawAdherenceChart(result) {
  const canvas = chartCanvases.adherence;
  if (!result) return drawEmptyChart(canvas);
  const ctx = chartContext(canvas);
  const box = { left: 58, top: 20, right: 620, bottom: 310 };
  const all = [...result.observedUnits, ...result.fittedUnits];
  const [min, max] = extent(all);
  drawAxes(ctx, box, "Calculado (R$/m2)", "Observado (R$/m2)");
  ctx.strokeStyle = "#9aa8a0";
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  ctx.moveTo(scale(min, min, max, box.left, box.right), scale(min, min, max, box.bottom, box.top));
  ctx.lineTo(scale(max, min, max, box.left, box.right), scale(max, min, max, box.bottom, box.top));
  ctx.stroke();
  ctx.setLineDash([]);
  result.observedUnits.forEach((observed, i) => {
    const x = scale(result.fittedUnits[i], min, max, box.left, box.right);
    const y = scale(observed, min, max, box.bottom, box.top);
    ctx.fillStyle = "#265f8f";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawResidualChart(result) {
  const canvas = chartCanvases.residual;
  if (!result) return drawEmptyChart(canvas);
  const ctx = chartContext(canvas);
  const box = { left: 58, top: 20, right: 620, bottom: 310 };
  const xValues = result.fittedUnits;
  const yValues = result.standardizedResiduals;
  const [minX, maxX] = extent(xValues);
  const [minY, maxY] = extent([...yValues, -2, 0, 2]);
  drawAxes(ctx, box, "Valor calculado (R$/m2)", "Residuo padronizado");
  [-2, 0, 2].forEach((line) => {
    const y = scale(line, minY, maxY, box.bottom, box.top);
    ctx.strokeStyle = line === 0 ? "#637068" : "#d7ded9";
    ctx.setLineDash(line === 0 ? [] : [5, 5]);
    ctx.beginPath();
    ctx.moveTo(box.left, y);
    ctx.lineTo(box.right, y);
    ctx.stroke();
  });
  ctx.setLineDash([]);
  yValues.forEach((value, i) => {
    const x = scale(xValues[i], minX, maxX, box.left, box.right);
    const y = scale(value, minY, maxY, box.bottom, box.top);
    ctx.fillStyle = Math.abs(value) > 2 ? "#b03a2e" : "#26734d";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawNormalityChart(result) {
  const canvas = chartCanvases.normality;
  if (!result) return drawEmptyChart(canvas);
  const ctx = chartContext(canvas);
  const box = { left: 58, top: 20, right: 620, bottom: 310 };
  const bins = 8;
  const values = result.standardizedResiduals;
  const [minX, maxX] = extent([...values, -3, 3], 0);
  const width = (maxX - minX) / bins;
  const counts = Array.from({ length: bins }, () => 0);
  values.forEach((value) => {
    const index = Math.max(0, Math.min(bins - 1, Math.floor((value - minX) / width)));
    counts[index] += 1;
  });
  const maxCount = Math.max(...counts, 1);
  drawAxes(ctx, box, "Residuo padronizado", "Frequencia");
  counts.forEach((count, i) => {
    const x0 = scale(minX + i * width, minX, maxX, box.left, box.right);
    const x1 = scale(minX + (i + 1) * width, minX, maxX, box.left, box.right);
    const y = scale(count, 0, maxCount, box.bottom, box.top);
    ctx.fillStyle = "#8fb7a3";
    ctx.fillRect(x0 + 2, y, Math.max(x1 - x0 - 4, 1), box.bottom - y);
  });
  ctx.strokeStyle = "#b03a2e";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= 80; i += 1) {
    const xValue = minX + (i / 80) * (maxX - minX);
    const density = Math.exp(-0.5 * xValue * xValue) / Math.sqrt(2 * Math.PI);
    const scaledDensity = density * values.length * width;
    const x = scale(xValue, minX, maxX, box.left, box.right);
    const y = scale(scaledDensity, 0, maxCount, box.bottom, box.top);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.lineWidth = 1;
}

function drawCorrelationChart(result) {
  const canvas = chartCanvases.correlation;
  if (!result) return drawEmptyChart(canvas);
  const ctx = chartContext(canvas);
  const names = result.variableNames;
  const size = 62;
  const startX = 190;
  const startY = 54;
  ctx.fillStyle = "#637068";
  ctx.font = "12px Arial";
  names.forEach((name, i) => {
    ctx.fillText(name, 16, startY + i * size + 36);
    ctx.save();
    ctx.translate(startX + i * size + 8, 42);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText(name, 0, 0);
    ctx.restore();
  });
  result.correlations.forEach((row, y) => {
    row.forEach((value, x) => {
      const red = value < 0 ? Math.round(180 * Math.abs(value)) : 45;
      const green = value > 0 ? Math.round(120 + 80 * value) : 70;
      const blue = value > 0 ? Math.round(110 + 40 * value) : Math.round(120 + 60 * Math.abs(value));
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      ctx.fillRect(startX + x * size, startY + y * size, size - 4, size - 4);
      ctx.fillStyle = "#ffffff";
      ctx.font = "13px Arial";
      ctx.textAlign = "center";
      ctx.fillText(number(value, 2), startX + x * size + size / 2 - 2, startY + y * size + 36);
      ctx.textAlign = "left";
    });
  });
}

function renderCharts() {
  if (state.error) {
    Object.values(chartCanvases).forEach((canvas) => drawEmptyChart(canvas, "Corrija o erro do modelo para gerar o grafico."));
    return;
  }
  drawAdherenceChart(state.result);
  drawResidualChart(state.result);
  drawNormalityChart(state.result);
  drawCorrelationChart(state.result);
}

function chartDataUrl(key) {
  const canvas = chartCanvases[key];
  if (!canvas) return "";
  try {
    return canvas.toDataURL("image/png");
  } catch {
    return "";
  }
}

function reportDiagnosticsRows(result) {
  if (!result) return "";
  const d = result.diagnostics;
  return `
    <tr><th>Normalidade</th><td>${diagnosticLabel(d.normality.status)} | ${pct(d.normality.within1)}, ${pct(d.normality.within164)}, ${pct(d.normality.within196)}</td></tr>
    <tr><th>Outliers</th><td>${d.outliers.above2.length} acima de |2|; ${d.outliers.above3.length} acima de |3|</td></tr>
    <tr><th>Multicolinearidade</th><td>${d.multicollinearity.highCorrelations.length} correlacao(oes) com |r| >= 0,80</td></tr>
    <tr><th>Significancia</th><td>p maximo ${pct(d.significance.maxP)} - ${diagnosticLabel(d.significance.status)}</td></tr>
    <tr><th>Micronumerosidade</th><td>n=${d.micronumerosity.n}; minimos: III=${d.micronumerosity.gradeIII}, II=${d.micronumerosity.gradeII}, I=${d.micronumerosity.gradeI}</td></tr>
    <tr><th>Geral</th><td>${diagnosticLabel(d.overall)}</td></tr>
  `;
}

function sampleRowsForReport(result) {
  const samples = result ? result.valid : state.samples.filter((sample) => sample.price > 0 && sample.area > 0);
  return samples.slice(0, 16).map((sample, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${sample.source || `Amostra ${index + 1}`}</td>
      <td>${money(sample.price)}</td>
      <td>${number(sample.area, 2)}</td>
      <td>${sample.location}</td>
      <td>${sample.standard}</td>
      <td>${sample.conservation}</td>
    </tr>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function reportValue(key, fallback = "-") {
  const value = fields[key] && String(fields[key].value).trim();
  return value ? escapeHtml(value) : fallback;
}

function setProjectStatus(message, status = "") {
  projectStatus.textContent = message;
  projectStatus.className = `project-status ${status}`.trim();
}

function readStoredProjects() {
  try {
    const projects = JSON.parse(localStorage.getItem(PROJECT_STORAGE_KEY) || "[]");
    return Array.isArray(projects) ? projects : [];
  } catch {
    setProjectStatus("Nao foi possivel ler os projetos salvos neste navegador.", "fail");
    return [];
  }
}

function writeStoredProjects(projects) {
  try {
    localStorage.setItem(PROJECT_STORAGE_KEY, JSON.stringify(projects));
    return true;
  } catch {
    setProjectStatus("Falha ao salvar. Verifique o espaco de armazenamento do navegador.", "fail");
    return false;
  }
}

function projectIdentifier() {
  return globalThis.crypto && crypto.randomUUID
    ? crypto.randomUUID()
    : `project-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function currentProjectData(id = state.activeProjectId || projectIdentifier()) {
  const fieldValues = Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field.value]));
  return {
    version: 1,
    id,
    name: projectName.value.trim() || fields.osNumber.value.trim() || "Laudo sem titulo",
    updatedAt: new Date().toISOString(),
    fields: fieldValues,
    samples: state.samples.map((sample) => ({ ...sample })),
    modelConfig: JSON.parse(JSON.stringify(state.modelConfig)),
  };
}

function markProjectDirty() {
  state.projectDirty = true;
  setProjectStatus("Alteracoes nao salvas.", "warn");
}

function renderProjectList() {
  const projects = readStoredProjects().sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")));
  if (!projects.length) {
    projectList.innerHTML = '<div class="project-empty">Nenhum projeto salvo neste navegador.</div>';
    return;
  }
  projectList.innerHTML = projects.map((project) => {
    const updated = project.updatedAt ? new Date(project.updatedAt).toLocaleString("pt-BR") : "Data nao informada";
    const sampleCount = Array.isArray(project.samples) ? project.samples.length : 0;
    return `
      <article class="project-item ${project.id === state.activeProjectId ? "active" : ""}">
        <div>
          <strong>${escapeHtml(project.name || "Laudo sem titulo")}</strong>
          <small>Atualizado em ${escapeHtml(updated)} | ${sampleCount} amostra(s)</small>
        </div>
        <div class="project-item-actions">
          <button type="button" data-project-open="${project.id}">Abrir</button>
          <button type="button" class="project-delete" data-project-delete="${project.id}">Excluir</button>
        </div>
      </article>`;
  }).join("");
  projectList.querySelectorAll("[data-project-open]").forEach((button) => {
    button.addEventListener("click", () => openStoredProject(button.dataset.projectOpen));
  });
  projectList.querySelectorAll("[data-project-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteStoredProject(button.dataset.projectDelete));
  });
}

function saveCurrentProject() {
  const project = currentProjectData();
  const projects = readStoredProjects();
  const existingIndex = projects.findIndex((item) => item.id === project.id);
  if (existingIndex >= 0) projects[existingIndex] = project;
  else projects.push(project);
  if (!writeStoredProjects(projects)) return;
  state.activeProjectId = project.id;
  state.projectDirty = false;
  projectName.value = project.name;
  setProjectStatus(`Projeto "${project.name}" salvo neste navegador.`, "ok");
  renderProjectList();
}

function applyProjectData(project, imported = false) {
  if (!project || typeof project.fields !== "object" || !Array.isArray(project.samples)) {
    throw new Error("Arquivo de projeto invalido ou incompleto.");
  }
  Object.entries(fields).forEach(([key, field]) => {
    const value = project.fields[key];
    if (value !== undefined && value !== null) field.value = String(value);
    else if (field.tagName === "SELECT") field.selectedIndex = 0;
    else field.value = "";
  });
  state.samples = project.samples.map((sample) => ({
    source: String(sample.source || ""),
    price: numeric(sample.price),
    area: numeric(sample.area),
    location: numeric(sample.location) || 2,
    standard: numeric(sample.standard) || 2,
    conservation: numeric(sample.conservation) || 2,
  }));
  const defaults = defaultModelConfig();
  state.modelConfig = Object.fromEntries(Object.keys(defaults).map((key) => [
    key,
    { ...defaults[key], ...((project.modelConfig && project.modelConfig[key]) || {}) },
  ]));
  state.activeProjectId = imported ? null : project.id;
  state.projectDirty = imported;
  projectName.value = imported ? `${project.name || "Projeto"} - importado` : project.name || "Laudo sem titulo";
  state.error = "";
  state.result = null;
  renderVariableControls();
  renderSamples();
  try {
    state.result = runRegression();
  } catch (error) {
    state.error = error.message;
  }
  updateAll();
  setProjectStatus(imported ? "Projeto importado. Salve para inclui-lo na lista local." : `Projeto "${projectName.value}" aberto.`, imported ? "warn" : "ok");
  renderProjectList();
}

function openStoredProject(id) {
  const project = readStoredProjects().find((item) => item.id === id);
  if (!project) {
    setProjectStatus("Projeto nao encontrado no armazenamento local.", "fail");
    return;
  }
  try {
    applyProjectData(project);
    location.hash = "os";
  } catch (error) {
    setProjectStatus(error.message, "fail");
  }
}

function deleteStoredProject(id) {
  const projects = readStoredProjects();
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  if (!window.confirm(`Excluir o projeto "${project.name}" deste navegador?`)) return;
  if (!writeStoredProjects(projects.filter((item) => item.id !== id))) return;
  if (state.activeProjectId === id) {
    state.activeProjectId = null;
    state.projectDirty = true;
  }
  setProjectStatus("Projeto excluido do armazenamento local.", "ok");
  renderProjectList();
}

function newBlankProject() {
  Object.values(fields).forEach((field) => {
    if (field.tagName === "SELECT") field.selectedIndex = 0;
    else field.value = "";
  });
  state.samples = [];
  state.modelConfig = defaultModelConfig();
  state.result = null;
  state.error = "";
  state.activeProjectId = null;
  state.projectDirty = true;
  projectName.value = "Novo laudo";
  renderVariableControls();
  renderSamples();
  updateAll();
  setProjectStatus("Novo projeto iniciado. Preencha os dados e salve.", "warn");
  renderProjectList();
  location.hash = "os";
}

function exportProjectBackup() {
  const project = currentProjectData();
  const blob = new Blob([JSON.stringify(project, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `projeto-sisavalia-${fields.osNumber.value || "rascunho"}.json`;
  link.click();
  URL.revokeObjectURL(url);
  setProjectStatus("Backup JSON exportado.", "ok");
}

async function importProjectBackup() {
  const file = projectImportFile.files && projectImportFile.files[0];
  if (!file) {
    setProjectStatus("Selecione um arquivo JSON de projeto.", "fail");
    return;
  }
  try {
    const project = JSON.parse(await file.text());
    applyProjectData(project, true);
  } catch (error) {
    setProjectStatus(`Falha na importacao: ${error.message}`, "fail");
  }
}

function renderFormalReportPages(r, reportEquation) {
  const yes = "SIM";
  const no = "NAO";
  const blank = "-";
  return `
      <section class="mma-template-page">
        <div class="mma-template-content compact dense">
          <header>
            <h2 class="doc-title">Laudo de Avaliacao - SisAvalia</h2>
            <p class="doc-subtitle">Blocos 1 a 4 do modelo de laudo de credito imobiliario</p>
          </header>
          <section class="doc-section">
            <h3>1. Solicitacao</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Prefixo / Depto solicitante</th><td>CENOP IMOBILIARIO</td><th>N OS</th><td>${fields.osNumber.value || blank}</td></tr>
                <tr><th>Data OS</th><td>${fields.osDate.value || blank}</td><th>Data avaliacao</th><td>${fields.osDate.value || blank}</td></tr>
                <tr><th>Proponente</th><td>${fields.proponent.value || blank}</td><th>CPF/CNPJ</th><td>${reportValue("cpfCnpj")}</td></tr>
                <tr><th>Proposito</th><td>${fields.purpose.value}</td><th>Objetivo</th><td>${fields.objective.value}</td></tr>
                <tr><th>Minha Casa Minha Vida</th><td>${no}</td><th>Uso interno</th><td>${yes}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>2. Identificacao</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Endereco</th><td>${fields.address.value || blank}</td><th>Numero</th><td>${reportValue("addressNumber")}</td></tr>
                <tr><th>Complemento</th><td>${reportValue("addressComplement")}</td><th>Bairro / Setor</th><td>${reportValue("neighborhood")}</td></tr>
                <tr><th>Cidade</th><td>${fields.city.value || blank}</td><th>UF / CEP</th><td>${fields.state.value || blank} / ${reportValue("postalCode")}</td></tr>
                <tr><th>Condominio / empreendimento</th><td>${reportValue("condominiumName")}</td><th>Matricula</th><td>${reportValue("registrationNumber")}</td></tr>
                <tr><th>Cartorio / Oficio</th><td>${reportValue("registryOffice")}</td><th>Data emissao matricula</th><td>${reportValue("registrationDate")}</td></tr>
                <tr><th>Observacoes</th><td colspan="3">${reportValue("propertyNotes")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>3. Micro-regiao do Avaliando</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Uso predominante</th><td>${reportValue("predominantUse")}</td><th>Padrao predominante</th><td>${labelFor(options.standard, fields.standard.value)}</td></tr>
                <tr><th>Acesso</th><td>${reportValue("accessType")}</td><th>Area de risco / alagamento</th><td>${reportValue("riskArea")}</td></tr>
                <tr><th>Infraestrutura urbana</th><td colspan="3">${reportValue("urbanInfrastructure")}</td></tr>
                <tr><th>Servicos publicos</th><td colspan="3">${reportValue("publicServices")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>4. Terreno</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Area total</th><td>${number(numeric(fields.landArea.value))} m2</td><th>N frentes</th><td>${reportValue("fronts")}</td></tr>
                <tr><th>Testada</th><td>${reportValue("frontage")}</td><th>Topografia</th><td>${reportValue("topography")}</td></tr>
                <tr><th>Posicao na quadra</th><td>${reportValue("blockPosition")}</td><th>Fracao ideal</th><td>${reportValue("idealFraction")}</td></tr>
                <tr><th>Superficie</th><td>${reportValue("surface")}</td><th>Cota greide / formato</th><td>${reportValue("gradeFormat")}</td></tr>
              </tbody>
            </table>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 03 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Laudo de Avaliacao - SisAvalia</h2>
            <p class="doc-subtitle">Bloco 5 do modelo: caracteristicas fisicas, areas, vagas e condominio</p>
          </header>
          <section class="doc-section">
            <h3>5. Imovel Avaliando</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Tipo</th><td>${fields.propertyType.value}</td><th>Uso</th><td>${reportValue("propertyUse")}</td></tr>
                <tr><th>Posicao da edificacao</th><td>${reportValue("buildingPosition")}</td><th>Ocupacao</th><td>${reportValue("occupancy")}</td></tr>
                <tr><th>Dormitorios</th><td>${numeric(fields.bedrooms.value)}</td><th>Suites</th><td>${reportValue("suites")}</td></tr>
                <tr><th>Banheiros sociais</th><td>${numeric(fields.bathrooms.value)}</td><th>Total banheiros</th><td>${numeric(fields.bathrooms.value)}</td></tr>
                <tr><th>Lavabo</th><td>${reportValue("lavatories")}</td><th>Pavimentos</th><td>${reportValue("floors")}</td></tr>
                <tr><th>Padrao acabamento</th><td>${labelFor(options.standard, fields.standard.value)}</td><th>Conservacao</th><td>${labelFor(options.conservation, fields.conservation.value)}</td></tr>
                <tr><th>Idade aparente</th><td>${reportValue("apparentAge")}</td><th>Localizacao</th><td>${labelFor(options.locationScore, fields.locationScore.value)}</td></tr>
                <tr><th>Esquadrias</th><td>${reportValue("windowFrames")}</td><th>Cobertura / teto</th><td>${reportValue("roofCeiling")}</td></tr>
                <tr><th>Abastecimento agua</th><td>${reportValue("waterSupply")}</td><th>Esgoto sanitario</th><td>${reportValue("sewage")}</td></tr>
                <tr><th>Fechamento paredes</th><td>${reportValue("wallSystem")}</td><th>Tipo implantacao</th><td>${reportValue("deploymentType")}</td></tr>
                <tr><th>Habitado anteriormente</th><td>${reportValue("previouslyOccupied")}</td><th>Infraestrutura avaliando</th><td>${reportValue("propertyInfrastructure")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>Areas, Vagas e Coordenadas</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Area averbada</th><td>${number(numeric(fields.builtArea.value))} m2</td><th>Area nao averbada</th><td>${reportValue("unregisteredArea")}</td></tr>
                <tr><th>Area total do imovel</th><td>${number(numeric(fields.builtArea.value))} m2</td><th>Area referencia</th><td>${number(numeric(fields.builtArea.value))} m2</td></tr>
                <tr><th>Vagas cobertas</th><td>${reportValue("coveredParking")}</td><th>Vagas descobertas / total</th><td>${reportValue("uncoveredParking", numeric(fields.parking.value))}</td></tr>
                <tr><th>Latitude</th><td>${reportValue("latitude")}</td><th>Longitude</th><td>${reportValue("longitude")}</td></tr>
                <tr><th>Comodos</th><td colspan="3">${reportValue("roomsDescription")}</td></tr>
                <tr><th>Condominio</th><td colspan="3">${reportValue("condominiumFeatures")}</td></tr>
              </tbody>
            </table>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 04 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Laudo de Avaliacao - SisAvalia</h2>
            <p class="doc-subtitle">Blocos 6 a 9 do modelo tecnico de avaliacao imobiliaria</p>
          </header>
          <section class="doc-section">
            <h3>6. Condicoes Gerais</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Documentacao confere com vistoria</th><td>${reportValue("documentationMatches")}</td><th>Estabilidade e solidez</th><td>${reportValue("stability")}</td></tr>
                <tr><th>Vicios aparentes</th><td>${reportValue("apparentDefects")}</td><th>Habitabilidade</th><td>${reportValue("habitability")}</td></tr>
                <tr><th>Fatores ambientais/climaticos/localizacao</th><td>${reportValue("environmentalFactors")}</td><th>Sistema DATEC/SINAT</th><td>${reportValue("datecSinat")}</td></tr>
                <tr><th>Fatores valorizantes</th><td>${reportValue("valuedFactors")}</td><th>Restritivos/depreciacao</th><td>${reportValue("restrictiveFactors")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>Vistoria</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Data vistoria</th><td>${fields.inspectionDate.value || blank}</td><th>Contato agendamento</th><td>${reportValue("inspectionContact")}</td></tr>
                <tr><th>Telefone contato</th><td>${reportValue("inspectionPhone")}</td><th>Data contato</th><td>${reportValue("contactDate")}</td></tr>
                <tr><th>Hora chegada</th><td>${reportValue("arrivalTime")}</td><th>Hora saida</th><td>${reportValue("departureTime")}</td></tr>
                <tr><th>Data agendamento</th><td>${reportValue("appointmentDate")}</td><th>Hora agendamento</th><td>${reportValue("appointmentTime")}</td></tr>
                <tr><th>Ateste / historico infrutifero</th><td colspan="3">${reportValue("inspectionHistory")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>7. Avaliacao e 8. Diagnostico de Mercado</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Metodologia</th><td>METODO COMPARATIVO DIRETO DE DADOS DE MERCADO</td><th>Tratamento</th><td>ESTATISTICA INFERENCIAL</td></tr>
                <tr><th>Dados utilizados</th><td>${r ? r.n : blank}</td><th>Fundamentacao / precisao</th><td>${r ? `${r.foundation} / ${r.precision}` : blank}</td></tr>
                <tr><th>Desempenho mercado</th><td>${reportValue("marketPerformance")}</td><th>Numero de ofertas</th><td>${reportValue("offersLevel")}</td></tr>
                <tr><th>Liquidez e prazo provavel</th><td>${reportValue("liquidity")}</td><th>Prazo efetivo</th><td>${reportValue("effectivePeriod")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>9. Manifestacoes Sobre a Garantia</h3>
            <p>Considerando as informacoes anteriores, a vistoria, a documentacao apresentada e as atuais condicoes do mercado imobiliario local, o bem avaliando pode ser aceito em garantia: ${reportValue("guaranteeAccepted")}.</p>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 05 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Laudo de Avaliacao - SisAvalia</h2>
            <p class="doc-subtitle">Blocos 10 a 14, anexos, memoria, fotos e mapa</p>
          </header>
          <section class="doc-section">
            <h3>10. Resultados</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Valor mercado total</th><td>${r ? money(r.value) : blank}</td><th>Valor unitario</th><td>${r ? `${money(r.unit)}/m2` : blank}</td></tr>
                <tr><th>Limite inferior</th><td>${r ? money(r.lower) : blank}</td><th>Limite superior</th><td>${r ? money(r.upper) : blank}</td></tr>
                <tr><th>Area referencia</th><td>${number(numeric(fields.builtArea.value))} m2</td><th>Valor medio adotado</th><td>${yes}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>11 a 13. Complementares, Observacoes e Anexos</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Unidades autonomas / cartorio</th><td colspan="3">${reportValue("autonomousUnits")}</td></tr>
                <tr><th>Observacoes finais</th><td colspan="3">${reportValue("finalNotes")}</td></tr>
                <tr><th>Anexo 1</th><td>Documentacao da unidade avalianda fornecida pelo solicitante</td><th>Anexo 2</th><td>Outros documentos que fundamentam o trabalho</td></tr>
                <tr><th>Anexo 3</th><td>Modelo de Estatistica Inferencial</td><th>ART/RRT</th><td>${reportValue("artRrt", "A anexar pelo responsavel tecnico")}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>14. Memoria de Calculo</h3>
            <table class="doc-table compact">
              <tbody>
                <tr><th>Equacao</th><td colspan="3">${r ? reportEquation : blank}</td></tr>
                <tr><th>Atributos avaliando</th><td colspan="3">${r ? r.variableNames.join(", ") : blank}</td></tr>
                <tr><th>Significancia</th><td colspan="3">${r ? r.diagnostics.significance.variables.map((item) => `${item.name}: ${pct(item.pValue * 100)}`).join("; ") : blank}</td></tr>
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>Documentacao Fotografica e Mapa</h3>
            <p>Campos reservados para Fachada Principal, Vista da Rua e Mapa/Croqui de localizacao, conforme o modelo de laudo SisAvalia. As imagens serao anexadas na etapa de upload de fotos e mapa.</p>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 06 | SISAVALIA</div>
      </section>
  `;
}

function renderReportPreview() {
  const r = state.result;
  const reportEquation = r ? `ln(valor unitario) = b0 + ${r.variableNames.map((name, i) => `b${i + 1} ${name}`).join(" + ")}` : "-";
  const chartImages = {
    adherence: chartDataUrl("adherence"),
    residual: chartDataUrl("residual"),
    normality: chartDataUrl("normality"),
    correlation: chartDataUrl("correlation"),
  };
  const memoryText = state.error ? `Erro no calculo: ${state.error}` : modelReport.textContent;
  reportPreview.innerHTML = `
    <div class="mma-template-document">
      <section class="mma-template-page">
        <div class="mma-template-content">
          <header>
            <h2 class="doc-title">Laudo de Avaliacao - SisAvalia</h2>
            <p class="doc-subtitle">Uso interno | Metodo comparativo direto de dados de mercado com estatistica inferencial</p>
          </header>

          <section class="doc-section">
            <h3>1. Resumo Executivo</h3>
            <p>Este laudo apresenta a estimativa de valor de mercado do imovel avaliando por metodo comparativo direto de dados de mercado, com tratamento por estatistica inferencial. Os dados cadastrais completos, a caracterizacao fisica, as condicoes de vistoria e os campos formais estao detalhados nas paginas seguintes.</p>
          </section>

          <div class="doc-grid three">
            <div class="doc-metric"><span>Valor de mercado</span><strong>${r ? money(r.value) : "-"}</strong></div>
            <div class="doc-metric"><span>Valor unitario</span><strong>${r ? `${money(r.unit)}/m2` : "-"}</strong></div>
            <div class="doc-metric"><span>Fund. / Precisao</span><strong>${r ? `${r.foundation}/${r.precision}` : "-"}</strong></div>
          </div>

          <section class="doc-section">
            <h3>2. Resultado Sintetico</h3>
            <table class="doc-table">
              <tbody>
                <tr><th>Ordem de Servico</th><td>${fields.osNumber.value || "-"}</td><th>Proponente</th><td>${fields.proponent.value || "-"}</td></tr>
                <tr><th>Imovel</th><td colspan="3">${fields.address.value || "-"} - ${fields.city.value || "-"} / ${fields.state.value || "-"}</td></tr>
                <tr><th>Limite inferior</th><td>${r ? money(r.lower) : "-"}</td><th>Limite superior</th><td>${r ? money(r.upper) : "-"}</td></tr>
                <tr><th>Area referencia</th><td>${number(numeric(fields.builtArea.value))} m2</td><th>R2 ajustado</th><td>${r ? number(r.adjR2, 3) : "-"}</td></tr>
              </tbody>
            </table>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 01 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Fundamentacao Tecnica</h2>
            <p class="doc-subtitle">Criterios normativos e base metodologica do laudo</p>
          </header>

          <section class="doc-section">
            <h3>3. Base Tecnica</h3>
            <p>O trabalho foi estruturado conforme os criterios da ABNT NBR 14653 aplicaveis a avaliacao de bens imoveis, observando identificacao do bem, vistoria, pesquisa de mercado, tratamento dos dados, enquadramento de fundamentacao e apresentacao do resultado.</p>
          </section>

          <section class="doc-section">
            <h3>4. Metodo e Tratamento</h3>
            <p>Foi adotado o metodo comparativo direto de dados de mercado, com tratamento por estatistica inferencial sobre o valor unitario. O modelo utiliza ${r ? r.n : "-"} dados de mercado e ${r ? r.k : "-"} variaveis independentes, com enquadramento estimado em grau ${r ? r.foundation : "-"} de fundamentacao e grau ${r ? r.precision : "-"} de precisao.</p>
          </section>

          <section class="doc-section">
            <h3>5. Premissas de Revisao</h3>
            <p>O resultado automatizado depende da validacao do responsavel tecnico quanto a consistencia das amostras, aderencia mercadologica, documentacao, vistoria, anexos fotograficos, mapa/croqui, ART/RRT e coerencia final do laudo.</p>
          </section>

          <section class="doc-section">
            <h3>6. Estrutura do Documento</h3>
            <table class="doc-table">
              <tbody>
                <tr><th>Campos formais</th><td colspan="3">Solicitacao, identificacao, micro-regiao, terreno, imovel, vistoria, mercado, garantia, resultados e anexos.</td></tr>
                <tr><th>Analise estatistica</th><td colspan="3">Diagnosticos, graficos, amostras utilizadas e memoria de calculo completa.</td></tr>
                <tr><th>Data da vistoria</th><td>${fields.inspectionDate.value || "-"}</td><th>Data base</th><td>${fields.osDate.value || "-"}</td></tr>
              </tbody>
            </table>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 02 | SISAVALIA</div>
      </section>

      ${renderFormalReportPages(r, reportEquation)}

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Diagnostico Estatistico Completo</h2>
            <p class="doc-subtitle">Leitura auxiliar dos criterios tecnicos do modelo inferencial</p>
          </header>
          <section class="doc-section">
            <h3>8. Resultado dos Diagnosticos</h3>
            <table class="doc-table">
              <tbody>
                ${reportDiagnosticsRows(r)}
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>9. Significancia das Variaveis</h3>
            <table class="doc-table compact">
              <thead>
                <tr><th>Variavel</th><th>p-valor</th><th>Enquadramento auxiliar</th></tr>
              </thead>
              <tbody>
                ${(r ? r.diagnostics.significance.variables : []).map((item) => `
                  <tr><td>${item.name}</td><td>${pct(item.pValue * 100)}</td><td>${item.grade}</td></tr>
                `).join("")}
              </tbody>
            </table>
          </section>
          <section class="doc-section">
            <h3>10. Observacao Tecnica</h3>
            <p>Os diagnosticos estatisticos indicam consistencia auxiliar do modelo, mas dependem da revisao do responsavel tecnico quanto a aderencia mercadologica, coerencia das variaveis, validade das amostras e atendimento integral a OS.</p>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 07 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Graficos do Modelo - Aderencia e Residuos</h2>
            <p class="doc-subtitle">Graficos gerados automaticamente a partir do modelo calculado</p>
          </header>
          <div class="doc-chart-grid">
            <section class="doc-chart-card">
              <h3>11. Aderencia: observado x calculado</h3>
              <img src="${chartImages.adherence}" alt="Grafico de aderencia observado x calculado" />
            </section>
            <section class="doc-chart-card">
              <h3>12. Residuos padronizados</h3>
              <img src="${chartImages.residual}" alt="Grafico de residuos padronizados" />
            </section>
          </div>
        </div>
        <div class="doc-footer-note">Pagina 08 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Graficos do Modelo - Normalidade e Correlacoes</h2>
            <p class="doc-subtitle">Distribuicao dos residuos e matriz de correlacoes das variaveis independentes</p>
          </header>
          <div class="doc-chart-grid">
            <section class="doc-chart-card">
              <h3>13. Distribuicao dos residuos</h3>
              <img src="${chartImages.normality}" alt="Grafico de distribuicao dos residuos" />
            </section>
            <section class="doc-chart-card">
              <h3>14. Matriz de correlacoes</h3>
              <img src="${chartImages.correlation}" alt="Matriz de correlacoes" />
            </section>
          </div>
        </div>
        <div class="doc-footer-note">Pagina 09 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Amostras Utilizadas e Memoria</h2>
            <p class="doc-subtitle">Relacao sintetica dos dados efetivamente utilizados no modelo</p>
          </header>
          <section class="doc-section">
            <h3>15. Amostras de Mercado</h3>
            <table class="doc-table compact">
              <thead>
                <tr><th>#</th><th>Fonte / endereco</th><th>Preco</th><th>Area</th><th>Local</th><th>Padrao</th><th>Conserv.</th></tr>
              </thead>
              <tbody>
                ${sampleRowsForReport(r)}
              </tbody>
            </table>
            <p class="doc-small-note">Exibidas ate 16 amostras nesta pagina. Total utilizado no modelo: ${r ? r.n : "-"}. A base completa permanece na tabela de amostras do sistema.</p>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 10 | SISAVALIA</div>
      </section>

      <section class="mma-template-page">
        <div class="mma-template-content compact">
          <header>
            <h2 class="doc-title">Memoria de Calculo Completa</h2>
            <p class="doc-subtitle">Relatorio textual gerado pelo motor inferencial</p>
          </header>
          <section class="doc-section">
            <h3>16. Equacao, coeficientes e resultados</h3>
            <pre class="doc-memory">${escapeHtml(memoryText)}</pre>
          </section>
        </div>
        <div class="doc-footer-note">Pagina 11 | SISAVALIA</div>
      </section>
    </div>
  `;
}

function labelFor(values, value) {
  const found = values.find(([v]) => String(v) === String(value));
  return found ? found[1] : value;
}

function updateAll() {
  renderMetrics();
  renderChecks();
  renderDiagnostics();
  renderModelReport();
  renderCharts();
  renderReportReview();
  renderReportPreview();
}

function loadSample() {
  state.error = "";
  state.modelConfig = defaultModelConfig();
  renderVariableControls();
  fields.osNumber.value = "2026.3901.000001-1";
  fields.osDate.value = "2026-06-26";
  fields.inspectionDate.value = "2026-06-26";
  fields.proponent.value = "CLIENTE EXEMPLO";
  fields.purpose.value = "GARANTIA DE CREDITO/EGI";
  fields.objective.value = "VALOR DE MERCADO DE COMPRA E VENDA";
  fields.address.value = "Rua Exemplo, 100";
  fields.city.value = "Lapao";
  fields.state.value = "BA";
  fields.propertyType.value = "CASA";
  fields.builtArea.value = "120";
  fields.landArea.value = "240";
  fields.standard.value = "2";
  fields.conservation.value = "2";
  fields.locationScore.value = "2";
  fields.bedrooms.value = "3";
  fields.bathrooms.value = "2";
  fields.parking.value = "1";
  const reportDefaults = {
    cpfCnpj: "000.000.000-00",
    addressNumber: "100",
    addressComplement: "CASA",
    neighborhood: "CENTRO",
    postalCode: "44905-000",
    condominiumName: "NAO SE APLICA",
    registrationNumber: "00000",
    registryOffice: "CARTORIO DE REGISTRO DE IMOVEIS",
    registrationDate: "2026-06-20",
    propertyNotes: "Dados de exemplo sujeitos a conferencia documental e vistoria.",
    predominantUse: "RESIDENCIAL",
    accessType: "DIRETO POR VIA PAVIMENTADA",
    riskArea: "NAO",
    fronts: "1",
    frontage: "10",
    topography: "PLANA",
    blockPosition: "MEIO DE QUADRA",
    idealFraction: "100%",
    surface: "SECA E FIRME",
    gradeFormat: "NO NIVEL DA RUA / REGULAR",
    urbanInfrastructure: "Agua, energia eletrica, iluminacao publica, drenagem, esgoto sanitario e pavimentacao.",
    publicServices: "Educacao, transporte publico, comercio, coleta de lixo, seguranca e saude.",
    propertyUse: "RESIDENCIAL",
    buildingPosition: "ISOLADA",
    occupancy: "OCUPADO",
    suites: "1",
    lavatories: "0",
    floors: "1",
    apparentAge: "10",
    windowFrames: "ALUMINIO E VIDRO",
    roofCeiling: "TELHA CERAMICA / FORRO",
    waterSupply: "REDE PUBLICA",
    sewage: "REDE PUBLICA",
    wallSystem: "ALVENARIA",
    deploymentType: "ISOLADO",
    previouslyOccupied: "SIM",
    unregisteredArea: "0",
    coveredParking: "1",
    uncoveredParking: "0",
    latitude: "-11.3833",
    longitude: "-41.8333",
    roomsDescription: "Sala, cozinha, 3 dormitorios, 2 banheiros e area de servico.",
    propertyInfrastructure: "Muros, portao e instalacoes prediais em funcionamento.",
    condominiumFeatures: "NAO SE APLICA",
    documentationMatches: "SIM",
    stability: "SIM",
    apparentDefects: "NAO",
    habitability: "SIM",
    environmentalFactors: "NAO",
    datecSinat: "NAO",
    inspectionContact: "CLIENTE EXEMPLO",
    inspectionPhone: "(74) 99999-0000",
    contactDate: "2026-06-25",
    arrivalTime: "09:00",
    departureTime: "10:00",
    appointmentDate: "2026-06-26",
    appointmentTime: "09:00",
    valuedFactors: "Boa acessibilidade e disponibilidade de servicos urbanos.",
    restrictiveFactors: "Nao foram observados fatores restritivos relevantes na vistoria de exemplo.",
    inspectionHistory: "Vistoria interna e externa realizada com acesso integral ao imovel.",
    marketPerformance: "NORMAL / MEDIO",
    offersLevel: "MEDIO",
    liquidity: "MEDIA (ENTRE 12 E 18 MESES)",
    effectivePeriod: "NAO INFORMADO",
    guaranteeAccepted: "SIM",
    artRrt: "A EMITIR PELO RESPONSAVEL TECNICO",
    autonomousUnits: "NAO SE APLICA",
    finalNotes: "Valor condicionado a manutencao das caracteristicas observadas e a conferencia documental.",
  };
  Object.entries(reportDefaults).forEach(([key, value]) => {
    fields[key].value = value;
  });
  const base = [
    [252000, 70, 1, 1, 1], [319000, 76, 2, 1, 1], [457000, 82, 3, 2, 1],
    [361000, 88, 1, 2, 1], [598000, 94, 2, 3, 2], [707000, 100, 3, 3, 2],
    [427000, 106, 1, 1, 2], [490000, 112, 2, 1, 2], [811000, 118, 3, 2, 3],
    [638000, 124, 1, 2, 3], [870000, 130, 2, 3, 3], [1067000, 136, 3, 3, 3],
    [471000, 142, 1, 1, 1], [536000, 148, 2, 1, 1], [756000, 154, 3, 2, 1],
    [593000, 160, 1, 2, 1], [968000, 166, 2, 3, 2], [1091000, 172, 3, 3, 2],
    [649000, 178, 1, 1, 2], [744000, 184, 2, 1, 2], [1153000, 190, 3, 2, 3],
    [946000, 196, 1, 2, 3], [1304000, 202, 2, 3, 3], [1471000, 208, 3, 3, 3],
    [651000, 214, 1, 1, 1], [748000, 220, 2, 1, 1], [1052000, 226, 3, 2, 1],
    [797000, 232, 1, 2, 1], [1291000, 238, 2, 3, 2], [1471000, 244, 3, 3, 2],
  ];
  state.samples = base.map((row, i) => ({
    source: `Amostra ${String(i + 1).padStart(2, "0")} - fonte/endereco`,
    price: row[0],
    area: row[1],
    location: row[2],
    standard: row[3],
    conservation: row[4],
  }));
  try {
    state.result = runRegression();
  } catch (error) {
    state.result = null;
    state.error = error.stack || error.message;
  }
  state.activeProjectId = null;
  state.projectDirty = true;
  projectName.value = `Laudo exemplo - ${fields.osNumber.value}`;
  setProjectStatus("Exemplo carregado. Salve para manter este projeto.", "warn");
  renderSamples();
  updateAll();
  renderProjectList();
}

function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function importSamplesFromFile() {
  const file = sampleImportFile.files && sampleImportFile.files[0];
  if (!file) {
    setImportStatus("Selecione um arquivo CSV ou TSV para importar.", "fail");
    return;
  }
  const extension = file.name.split(".").pop().toLowerCase();
  if (!["csv", "tsv", "txt"].includes(extension)) {
    setImportStatus("Nesta etapa, importe CSV/TSV exportado do Excel. Suporte direto a XLSX entra na proxima fase.", "fail");
    return;
  }
  try {
    const text = await file.text();
    const imported = parseSamplesFile(text);
    if (!imported.length) throw new Error("Nenhuma amostra valida encontrada.");
    state.error = "";
    state.result = null;
    state.samples = importMode.value === "append" ? [...state.samples, ...imported] : imported;
    markProjectDirty();
    renderSamples();
    try {
      state.result = runRegression();
    } catch (error) {
      state.error = error.message;
    }
    updateAll();
    setImportStatus(`${imported.length} amostras importadas de ${file.name}.`, "ok");
  } catch (error) {
    setImportStatus(`Falha na importacao: ${error.message}`, "fail");
  }
}

function downloadSampleTemplate() {
  const rows = [
    ["fonte", "preco", "area", "local", "padrao", "conservacao"],
    ["Rua Exemplo 01 - Corretor A", "320000", "95", "2", "2", "2"],
    ["Rua Exemplo 02 - Portal Imobiliario", "455000", "130", "3", "3", "2"],
    ["Rua Exemplo 03 - Informante B", "245000", "78", "1", "2", "1"],
  ];
  const csv = rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(";")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "modelo-amostras-sisavalia.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function setExportStatus(message, status = "") {
  exportStatus.textContent = message;
  exportStatus.className = `export-status ${status}`.trim();
}

function collectReportStyles(templateDataUrl = "") {
  const styles = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText).join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");
  return templateDataUrl ? styles.replaceAll("../assets/template-mma.png", templateDataUrl) : styles;
}

async function preparePrintTemplates() {
  const templateUrl = new URL("assets/template-mma.png", location.href).href;
  const pages = Array.from(reportPreview.querySelectorAll(".mma-template-page"));
  const images = pages.map((page) => {
    let image = page.querySelector(".print-template");
    if (!image) {
      image = document.createElement("img");
      image.className = "print-template";
      image.alt = "";
      image.src = templateUrl;
      page.prepend(image);
    }
    return image;
  });
  await Promise.all(images.map((image) => image.complete ? Promise.resolve() : image.decode().catch(() => undefined)));
}

async function exportPdfReport() {
  const review = renderReportReview();
  if (review.counts.critical) {
    setExportStatus(`${review.counts.critical} pendencia(s) critica(s). Corrija antes de gerar o PDF.`, "fail");
    location.hash = "laudo";
    reviewResults.querySelector(".review-item.critical")?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  await preparePrintTemplates();
  const previousTitle = document.title;
  const finishPrint = () => {
    document.body.classList.remove("printing-report");
    document.title = previousTitle;
  };
  document.title = `laudo-sisavalia-${fields.osNumber.value || "rascunho"}`;
  document.body.classList.add("printing-report");
  setExportStatus(review.counts.warning ? "Impressao preparada com alertas tecnicos." : "Escolha Salvar como PDF no destino da impressao.", review.counts.warning ? "warn" : "ok");
  window.addEventListener("afterprint", finishPrint, { once: true });
  window.print();
  window.setTimeout(finishPrint, 1000);
}

async function exportHtmlReport() {
  const templateBlob = await fetch("assets/template-mma.png").then((response) => response.blob());
  const templateDataUrl = await blobToDataUrl(templateBlob);
  const styles = collectReportStyles(templateDataUrl);
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Laudo SISAVALIA - MMA Engenharia</title>
    <style>
      ${styles}
      body { margin: 0; background: #e9edf4; }
      .report-preview { border: 0; }
      .export-memory { width: 1052px; background: white; border: 1px solid #D9DEE7; margin-top: 24px; padding: 24px; color: #202938; }
      .export-memory pre { white-space: pre-wrap; font-family: "Liberation Mono", Consolas, monospace; font-size: 12px; }
    </style>
  </head>
  <body>
    <main class="report-preview">
      ${reportPreview.innerHTML}
      <section class="export-memory">
        <h2>Memoria de Calculo Completa</h2>
        <pre>${modelReport.textContent}</pre>
      </section>
    </main>
  </body>
</html>`;
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `laudo-sisavalia-${fields.osNumber.value || "rascunho"}.html`;
  link.click();
  URL.revokeObjectURL(url);
  setExportStatus("Copia HTML exportada.", "ok");
}

Object.entries(options).forEach(([key, values]) => {
  if (fields[key]) populateSelect(fields[key], values);
});

const modelDependentFields = new Set(["builtArea", "locationScore", "standard", "conservation"]);
Object.entries(fields).forEach(([key, field]) => {
  field.addEventListener("input", () => {
    if (modelDependentFields.has(key)) state.result = null;
    markProjectDirty();
    updateAll();
  });
});

projectName.addEventListener("input", markProjectDirty);

document.querySelector("#addSampleBtn").addEventListener("click", () => addSample());
document.querySelector("#importSamplesBtn").addEventListener("click", importSamplesFromFile);
document.querySelector("#downloadTemplateBtn").addEventListener("click", downloadSampleTemplate);
document.querySelector("#clearSamplesBtn").addEventListener("click", () => {
  state.samples = [];
  state.result = null;
  state.error = "";
  markProjectDirty();
  renderSamples();
  updateAll();
});
document.querySelector("#loadSampleBtn").addEventListener("click", loadSample);
document.querySelector("#runModelBtn").addEventListener("click", () => {
  try {
    state.error = "";
    state.result = runRegression();
  } catch (error) {
    state.result = null;
    state.error = error.message;
  }
  updateAll();
});
document.querySelector("#exportPdfBtn").addEventListener("click", exportPdfReport);
document.querySelector("#exportHtmlBtn").addEventListener("click", exportHtmlReport);
document.querySelector("#newProjectBtn").addEventListener("click", newBlankProject);
document.querySelector("#saveProjectBtn").addEventListener("click", saveCurrentProject);
document.querySelector("#exportProjectBtn").addEventListener("click", exportProjectBackup);
document.querySelector("#importProjectBtn").addEventListener("click", importProjectBackup);
document.querySelector("#reviewBtn").addEventListener("click", () => {
  renderReportReview();
  reviewResults.querySelector(".review-item")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

window.SISAVALIA = {
  state,
  runRegression,
  parseSamplesFile,
  activeModelVariables,
  buildReportReview,
  updateAll,
};

renderVariableControls();
loadSample();
renderProjectList();
